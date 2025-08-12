import * as ical from "ical.js";

/**
 * Simple per-instance in-memory cache.
 * Vercel may spin up multiple instances; each keeps its own cache.
 */
let cache = {
  data: null,
  ts: 0,
};

export default async function handler(req, res) {
  try {
    const url = process.env.ICAL_LINK;
    if (!url) {
      return res.status(500).json({ error: "Missing BOOKING_ICAL_URL" });
    }

    const ttlMinutes = Number(process.env.CACHE_TTL_MIN || 15);
    const TTL_MS = ttlMinutes * 60 * 1000;

    const now = Date.now();
    const force = req.query?.force === "1";

    // If cache is fresh and not forced, serve it
    if (!force && cache.data && now - cache.ts < TTL_MS) {
      setCachingHeaders(res, ttlMinutes);
      return res.status(200).json(cache.data);
    }

    // Fetch ICS
    const icsText = await fetch(url, { headers: { "User-Agent": "VillaM/1.0" } }).then(r => {
      if (!r.ok) throw new Error(`ICS fetch failed: ${r.status}`);
      return r.text();
    });

    // Parse ICS -> list of booked dates (YYYY-MM-DD)
    const bookedDates = parseIcsToBookedDates(icsText);

    const payload = {
      bookedDates,          // array of "YYYY-MM-DD"
      lastFetched: new Date().toISOString(),
      ttlMinutes,
    };

    // Update in-memory cache
    cache = { data: payload, ts: Date.now() };

    // Edge cache via Vercel CDN
    setCachingHeaders(res, ttlMinutes);

    return res.status(200).json(payload);
  } catch (err) {
    console.error(err);
    // serve stale cache on error if we have it
    if (cache.data) {
      setCachingHeaders(res, Number(process.env.CACHE_TTL_MINUTES || 15));
      return res.status(200).json({ ...cache.data, stale: true });
    }
    return res.status(500).json({ error: "Failed to fetch availability" });
  }
}

function setCachingHeaders(res, ttlMinutes) {
  // CDN cache (s-maxage) + allow brief stale while revalidating
  const sMaxAge = Math.max(60, ttlMinutes * 60); // at least 60s
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${sMaxAge}, stale-while-revalidate=60`
  );
  res.setHeader("Content-Type", "application/json; charset=utf-8");
}

// Convert ICS VEVENTs to a list of booked YYYY-MM-DD strings
function parseIcsToBookedDates(icsText) {
  const jcal = ical.parse(icsText);
  const comp = new ical.Component(jcal);
  const events = comp.getAllSubcomponents("vevent") || [];

  const days = new Set();

  for (const ev of events) {
    const ve = new ical.Event(ev);

    // dtstart/dtend: Booking.com exports are usually all-day, dtend is exclusive
    const start = ve.startDate.toJSDate();
    const endExclusive = ve.endDate.toJSDate();

    // Walk day by day: include start ... end-1
    let d = startAtMidnight(start);
    const end = startAtMidnight(endExclusive);

    while (d < end) {
      days.add(toIsoDate(d));
      d = addDays(d, 1);
    }
  }

  // Return sorted array
  return Array.from(days).sort();
}

// Helpers
function startAtMidnight(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}
function toIsoDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
