import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaPhone, FaWhatsapp, FaEnvelope, FaAirbnb } from "react-icons/fa6";

export default function Book() {
  const [booked, setBooked] = useState(new Set());
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  // format a JS Date -> "YYYY-MM-DD" in *local* time (no UTC/ISO)
  const fmt = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/availability?_=" + Date.now());
        const data = await res.json();
        const arr = data.bookedDates || data.mergedBookedDates || [];
        setBooked(new Set(arr));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const isBooked = (d) => booked.has(fmt(d));

  return (
    <div className="text-neutral-800">
      <h1 className="text-3xl font-bold text-center py-12">Book Your Stay</h1>

      {/* SECTION background to separate from page */}
      <section className="">
        <div className="mx-auto w-[100%] md:w-[65%] max-w-6xl px-4 sm:px-6">
          {/* Card wrapper */}
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
              <h2 className="text-xl font-semibold">Choose your dates</h2>
              <div className="hidden sm:flex items-center gap-4 text-sm text-neutral-600">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-[#C9911F]" /> Selected
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-neutral-200" /> Unavailable
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              {loading ? (
                <p className="text-neutral-500">Loading availability…</p>
              ) : (
                <Calendar
                  className="react-calendar !w-full !max-w-[720px] !border-0"
                  onChange={setDate}
                  value={date}
                  // disable booked tiles
                  tileDisabled={({ date, view }) =>
                    view === "month" && isBooked(date)
                  }
                  // add a class so we can style booked days
                  tileClassName={({ date, view }) =>
                    view === "month" && isBooked(date) ? "is-booked" : undefined
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <div className="mx-auto w-[92%] md:w-[85%] max-w-6xl px-4 sm:px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="tel:+38598535263"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#C9911F] text-white shadow-md hover:shadow-lg transition"
        >
          <FaPhone className="text-2xl" />
          <span>Call us: +385 98 535 263</span>
        </a>

        <a
          href="https://wa.me/38598535263"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-green-500 text-white shadow-md hover:shadow-lg transition"
        >
          <FaWhatsapp className="text-2xl" />
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href="mailto:villa.m.vodice@gmail.com"
          className="flex items-center gap-3 p-4 rounded-lg bg-blue-500 text-white shadow-md hover:shadow-lg transition"
        >
          <FaEnvelope className="text-2xl" />
          <span>Email us: villa.m.vodice@gmail.com</span>
        </a>

        <a
          href="https://www.airbnb.com/rooms/example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-pink-500 text-white shadow-md hover:shadow-lg transition"
        >
          <FaAirbnb className="text-2xl" />
          <span>Book on Airbnb</span>
        </a>

        <a
          href="https://www.booking.com/hotel/hr/villa-m-vodice.hr.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-blue-700 text-white shadow-md hover:shadow-lg transition sm:col-span-2"
        >
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            height="24"
            width="24"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
            viewBox="-.092 .015 2732.125 2671.996"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z"
              fill="#3619b7ff"
            />
            <path d="m.001 1659.991h1364.531v1012.019h-1364.53z" fill="#3619b7ff" />
            <g fillRule="nonzero">
              <path
                d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244"
                fill="#fff"
              />
              <path
                d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.669 72.402 161.669 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894"
                fill="#00bafc"
              />
            </g>
          </svg>
          <span>Book on Booking.com</span>
        </a>
      </div>
    </div>
  );
}
