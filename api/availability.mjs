// api/availability.mjs
import ICAL from "ical.js"; // <-- default import
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let cache = { data: null, ts: 0 };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const manualBlocksPath = path.join(__dirname, '../data/blocked_dates.json');

export default async function handler(req, res) {
  try {
    const url = process.env.BOOKING_ICAL_URL;
    if (!url) {
      res.status(500).json({ error: "Missing BOOKING_ICAL_URL" });
      return;
    }

    const ttlMinutes = Number(process.env.CACHE_TTL_MINUTES || 15);
    const TTL = ttlMinutes * 60 * 1000;
    const now = Date.now();
    const force = (req.query && req.query.force) === "1";

    if (!force && cache.data && now - cache.ts < TTL) {
      setCacheHeaders(res, ttlMinutes);
      res.status(200).json(cache.data);
      return;
    }

    const r = await fetch(url, { headers: { "User-Agent": "VillaM/1.0" } });
    if (!r.ok) throw new Error(`ICS fetch failed: ${r.status}`);
    const icsText = await r.text();

    // --- TEMP LOGGING (optional while debugging)
    console.log(icsText.slice(0, 500));

    const bookedDates = parseIcsToBookedDates(icsText);
    const manualBlocks = JSON.parse(fs.readFileSync(manualBlocksPath, 'utf8'));
    const mergedBookedDates = Array.from(
      new Set([...bookedDates, ...expandExtras(manualBlocks)])
    ).sort();

    const payload = {
      mergedBookedDates,
      lastFetched: new Date().toISOString(),
      ttlMinutes,
    };

    cache = { data: payload, ts: Date.now() };
    setCacheHeaders(res, ttlMinutes);
    res.status(200).json(payload);
  } catch (e) {
    console.error(e);
    if (cache.data) {
      setCacheHeaders(res, Number(process.env.CACHE_TTL_MINUTES || 15));
      res.status(200).json({ ...cache.data, stale: true });
      return;
    }
    res.status(500).json({ error: "Failed to fetch availability" });
  }
}

function setCacheHeaders(res, ttlMinutes) {
  const sMax = Math.max(60, ttlMinutes * 60);
  res.setHeader("Cache-Control", `public, s-maxage=${sMax}, stale-while-revalidate=60`);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
}

function parseIcsToBookedDates(icsText) {
  // ICAL.parse returns jCal (array), then wrap in Component
  const jcal = ICAL.parse(icsText);
  const comp = new ICAL.Component(jcal);
  const events = comp.getAllSubcomponents("vevent") || [];

  const days = new Set();

  for (const ev of events) {
    const event = new ICAL.Event(ev);
    // Booking.com typically exports all-day events; dtend is exclusive
    const start = toMidnightLocal(event.startDate.toJSDate());
    const end = toMidnightLocal(event.endDate.toJSDate());

    for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
      days.add(toIsoLocal(d));
    }
  }
  return Array.from(days).sort();
}

function toMidnightLocal(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function toIsoLocal(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function expandExtras(blocks) {
  const allDates = [];

  // Single days
  if (blocks.days) {
    allDates.push(...blocks.days);
  }

  // Ranges
  if (blocks.ranges) {
    for (const range of blocks.ranges) {
      const start = new Date(range.start);
      const end = new Date(range.end);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        allDates.push(d.toISOString().split("T")[0]);
      }
    }
  }

  return allDates;
}
