import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaPhone, FaWhatsapp, FaEnvelope, FaAirbnb } from "react-icons/fa6";
import { TbBrandBooking } from 'react-icons/tb';

export default function Book() {
  const [booked, setBooked] = useState(new Set());
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/availability");
        const data = await res.json();
        setBooked(new Set(data.mergedBookedDates || []));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const isBooked = (d) => booked.has(d.toISOString().split("T")[0]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-neutral-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Your Stay</h1>

      {/* Calendar */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        {loading ? (
          <p className="text-center text-neutral-500">Loading availability…</p>
        ) : (
          <Calendar
            onChange={setDate}
            value={date}
            tileDisabled={({ date, view }) => view === "month" && isBooked(date)}
            tileClassName={({ date, view }) => {
              if (view === "month" && isBooked(date)) return "opacity-40 line-through";
              return undefined;
            }}
          />
        )}
      </div>

      {/* Contact Options */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Call us */}
        <a
          href="tel:+38590535263"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#C9911F] text-white shadow-md hover:shadow-lg transition"
        >
          <FaPhone className="text-2xl" />
          <span>Call us: +385 98 535 263</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/38598535263"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-green-500 text-white shadow-md hover:shadow-lg transition"
        >
          <FaWhatsapp className="text-2xl" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="mailto:villa.m.vodice@gmail.com"
          className="flex items-center gap-3 p-4 rounded-lg bg-blue-500 text-white shadow-md hover:shadow-lg transition"
        >
          <FaEnvelope className="text-2xl" />
          <span>Email us: villa.m.vodice@gmail.com</span>
        </a>

        {/* Airbnb */}
        <a
          href="https://www.airbnb.com/rooms/example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-pink-500 text-white shadow-md hover:shadow-lg transition"
        >
          <FaAirbnb className="text-2xl" />
          <span>Book on Airbnb</span>
        </a>

        {/* Booking.com */}
        <a
          href="https://www.booking.com/hotel/hr/villa-m-vodice.hr.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-blue-700 text-white shadow-md hover:shadow-lg transition sm:col-span-2"
        >
          <TbBrandBooking className="text-2xl" />
          <span>Book on Booking.com</span>
        </a>
      </div>
    </div>
  );
}
