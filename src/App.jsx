import { useState } from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from 'react-icons/tb';
import './App.css'

export default function App() {
  return (
    <div className="pt-10">
    <div className="min-h-dvh text-neutral-900">
      {/* ===== TOP OF THE PAGE ===== */}
      <header className="relative isolate overflow-visible">
        <img
          src="/villa-M-front.jpg"
          alt="Villa M exterior with pool"
          className="h-[60svh] md:h-[70svh] w-full object-cover rounded"
        />
        <div className="pointer-events-none absolute inset-0 rounded-b-3xl ring-1 ring-black/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-b-3xl z-0" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white">Villa M</h1>
          <p className="mt-2 md:mt-3 text-white/90 text-base md:text-lg">
            Dalmatian Coast Luxury Retreat
          </p>
          <button className="mt-5 md:mt-6 rounded-md bg-[#C9911F] px-5 py-2.5 text-white font-medium shadow-md hover:shadow-lg hover:bg-[#b8841c] transition">
            BOOK NOW
          </button>
        </div>

        {/* ===== FLOATING INFO CARD ===== */}
        <div className="absolute left-1/2 bottom-0 translate-y-3/4 md:translate-y-1/2 -translate-x-1/2 w-[92%] md:w-[80%]">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Item */}
              <InfoItem
                icon={
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
                  </svg>
                }
                title="Vodice, Croatia"
              />
              <InfoItem
                icon={
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 14a4 4 0 1 0-8 0" strokeWidth="1.5" />
                    <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
                    <path d="M6 20a6 6 0 0 1 12 0" strokeWidth="1.5" />
                  </svg>
                }
                title="Sleeps 6"
              />
              <InfoItem
                icon={
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 12h18M4 16c2-2 4-2 6 0s4 2 6 0 4-2 4-2" strokeWidth="1.5" />
                    <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" strokeWidth="1.5" />
                  </svg>
                }
                title="Private Pool"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to account for floating card */}
      <div className="h-35 md:h-24" />

      {/* ===== GALLERY SECTION ===== */}
      <section className="mx-auto w-[92%] md:w-[85%] max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <Link to="/gallery" className="text-2xl md:text-3xl font-semibold mb-4">
                Gallery
          </Link>
          <p className="text-neutral-700 leading-relaxed">
            Discover the perfect blend of modern and Mediterranean comfort at Villa M, featuring
            top‑tier amenities and stylish interiors.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-neutral-800 text-left">
            <li>5 min to beach</li>
            <li>Fenced private pool</li>
            <li>Three bedrooms with private bathrooms</li>
            <li>Welcome drinks and homemade delicacies</li>
          </ul>
        </div>

        {/* Right grid of images */}
        <div className="grid grid-cols-2 gap-4">
          <ImgCard src="/lezaljke.jpg" />
          <ImgCard src="/room.jpg" />
          <ImgCard src="/kitchen.jpg" />
          <ImgCard src="/glasses.jpg" />
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="mx-auto w-[92%] md:w-[85%] max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 mt-10 md:mt-20">
        <div>
          <img src="/table.jpg" alt="Mediterranean breakfast" className="rounded-xl object-cover w-full h-64 md:h-80" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Experience</h2>
          <p className="text-neutral-700 leading-relaxed">
            Sunbathe and enjoy a cocktail under the hot Mediterranean sun, cool down in the warm
            Adriatic sea and taste some of the best food and drinks in Europe.
          </p>
          <button className="mt-12 mx-auto rounded-md bg-[#C9911F] px-5 py-2.5 text-white font-medium shadow-md hover:shadow-lg hover:bg-[#b8841c] transition">
            CHECK AVAILABILITY
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mx-auto w-[92%] md:w-[85%] max-w-6xl mt-16 md:mt-24 py-10 border-t border-neutral-200">
          <div className="grid md:grid-cols-5 gap-8 text-sm">
    
            {/* Logo / Intro */}
            <div className="flex gap-4 mt-4 text-neutral-500 text-xl justify-center">
              <a href="https://www.instagram.com/_villa__m__?utm_source=qr&igsh=MTVodWt4MnkwcmJzZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#C9911F]">
                <FaInstagram />
              </a>
              <a href="https://wa.me/38598535263" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#C9911F]">
                <FaWhatsapp />
              </a>
              <a href="https://hr.airbnb.com/rooms/1407086960356766602?viralityEntryPoint=1&s=76" target="_blank" rel="noopener noreferrer" aria-label="AirBnb" className="hover:text-[#C9911F]">
                <FaAirbnb />
              </a>
              <a href="https://www.booking.com/hotel/hr/villa-m-vodice.hr.html" target="_blank" rel="noopener noreferrer" aria-label="AirBnb" className="hover:text-[#C9911F]">
                <TbBrandBooking />
              </a>
            </div>

            {/* Quick Links */}
            <FooterCol
              title="Quick Links"
              links={[
                { text: "Home", href: "/" },
                { text: "Gallery", href: "/gallery" },
                { text: "Book Now", href: "/book" },
              ]}
            />

            {/* Contact */}
            <FooterCol
              title="Contact"
              links={[
                { text: "+385 98 535 263", href: "tel:+38598535263" },
                { text: "villa.m.vodice@gmail.com", href: "mailto:villa.m.vodice@gmail.com" },
                { text: "Zatonska 95G, Vodice", href: "https://maps.app.goo.gl/vpkoiKtrnErqmwNH9" },
              ]}
            />

            {/* Legal */}
            <div>
              <p className="font-medium">Legal</p>
              <ul className="mt-4 space-y-2 text-neutral-600">
                <li>
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms & Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </footer>

      <div className="h-8" />
    </div>
    </div>
  );
}

/* ---------- small components ---------- */

function InfoItem({ icon, title }) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="text-neutral-800">{icon}</div>
      <p className="font-medium text-neutral-900">{title}</p>
    </div>
  );
}

function ImgCard({ src, className = "" }) {
  return (
    <div className={`rounded-xl overflow-hidden bg-neutral-100 ${className}`}>
      <img src={src} alt="" className="w-full h-40 md:h-48 object-cover" />
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="font-medium mb-3">{title}</p>
      <ul className="space-y-2 text-neutral-600">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href} className="hover:text-[#C9911F] transition">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}