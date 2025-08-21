import { Link } from "react-router-dom";
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
          <Link to="/book" className="mt-5 md:mt-6 rounded-md bg-[#C9911F] px-5 py-2.5 text-white font-medium shadow-md hover:shadow-lg hover:bg-[#b8841c] transition">
            BOOK NOW
          </Link>
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
        <div className="flex flex-col justify-center">
          <Link to="/gallery" className="text-2xl md:text-3xl font-semibold mb-4">
                Gallery
          </Link>
          <p className="text-neutral-700 leading-relaxed mt-4">
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
          <Link to="/book" className="mt-12 mx-auto rounded-md bg-[#C9911F] px-5 py-2.5 text-white font-medium shadow-md hover:shadow-lg hover:bg-[#b8841c] transition">
            CHECK AVAILABILITY
          </Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mx-auto w-[92%] md:w-[85%] max-w-6xl mt-16 md:mt-24 py-10 border-t border-neutral-200">
          <div className="grid md:grid-cols-5 gap-8 text-sm">
    
            {/* Logo / Intro */}
            <div className="flex gap-4 mt-4 text-neutral-500 text-xl justify-center">
              {/* <a href="https://www.instagram.com/_villa__m__?utm_source=qr&igsh=MTVodWt4MnkwcmJzZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#C9911F]">
                <FaInstagram />
              </a> */}
              <a
                href="https://www.instagram.com/_villa__m__?utm_source=qr&igsh=MTVodWt4MnkwcmJzZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-pink-500"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.75-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76Z"/>
                </svg>
              </a>

              {/* <a href="https://wa.me/38598535263" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#C9911F]">
                <FaWhatsapp />
              </a> */}
              <a
                href="https://wa.me/38598535263"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-green-500"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
                <path d="M 25 2 C 12.3 2 2 12.3 2 25 C 2 29.1 3.1 32.899219 5 36.199219 L 2 46.699219 C 1.9 46.999219 1.9992187 47.399219 2.1992188 47.699219 C 2.4992187 47.999219 2.8992187 48 3.1992188 48 L 14.199219 45.300781 C 17.399219 47.000781 21.1 48 25 48 C 37.7 48 48 37.7 48 25 C 48 12.3 37.7 2 25 2 z M 25 4 C 36.6 4 46 13.4 46 25 C 46 36.6 36.6 46 25 46 C 21.3 46 17.800781 45.000781 14.800781 43.300781 C 14.600781 43.200781 14.299609 43.099219 14.099609 43.199219 L 4.5 45.599609 L 7 36.400391 C 7.1 36.100391 7.0003906 35.899609 6.9003906 35.599609 C 5.1003906 32.499609 4 28.9 4 25 C 4 13.4 13.4 4 25 4 z M 18.113281 12.988281 C 17.925781 12.975781 17.800781 13 17.800781 13 L 16.599609 13 C 15.999609 13 15.100781 13.2 14.300781 14 C 13.800781 14.5 12 16.3 12 19.5 C 12 22.9 14.299609 25.799609 14.599609 26.099609 C 14.599609 26.099609 15 26.600781 15.5 27.300781 C 16 28.000781 16.699609 28.800781 17.599609 29.800781 C 19.399609 31.700781 21.899609 33.899219 25.099609 35.199219 C 26.499609 35.799219 27.699609 36.2 28.599609 36.5 C 30.199609 37 31.700781 36.900781 32.800781 36.800781 C 33.600781 36.700781 34.500391 36.299219 35.400391 35.699219 C 36.300391 35.099219 37.199609 34.400391 37.599609 33.400391 C 37.899609 32.600391 37.999609 31.900781 38.099609 31.300781 L 38.099609 30.5 C 38.099609 30.2 38.000781 30.200781 37.800781 29.800781 C 37.300781 29.000781 36.799219 29.000781 36.199219 28.800781 C 35.899219 28.600781 34.999219 28.200781 34.199219 27.800781 C 33.299219 27.400781 32.599609 27.000781 32.099609 26.800781 C 31.799609 26.700781 31.400391 26.499609 30.900391 26.599609 C 30.400391 26.699609 29.899609 27 29.599609 27.5 C 29.299609 27.9 28.200781 29.299219 27.800781 29.699219 L 27.699219 29.599609 C 27.299219 29.399609 26.7 29.200781 26 28.800781 C 25.2 28.400781 24.299219 27.800781 23.199219 26.800781 C 21.599219 25.400781 20.499219 23.699609 20.199219 23.099609 C 20.499219 22.699609 20.899609 22.3 21.099609 22 C 21.199609 21.9 21.280859 21.799219 21.349609 21.699219 C 21.418359 21.599219 21.475391 21.500391 21.525391 21.400391 C 21.625391 21.200391 21.700781 21.000781 21.800781 20.800781 C 22.200781 20.100781 22.000781 19.300391 21.800781 18.900391 C 21.800781 18.900391 21.7 18.600781 21.5 18.300781 C 21.4 18.000781 21.2 17.499609 21 17.099609 C 20.6 16.199609 20.2 15.199609 20 14.599609 C 19.7 13.899609 19.300781 13.399219 18.800781 13.199219 C 18.550781 13.049219 18.300781 13.000781 18.113281 12.988281 z M 16.599609 15 L 17.699219 15 L 17.900391 15 C 17.900391 15 17.999609 15.100391 18.099609 15.400391 C 18.299609 16.000391 18.799609 17.000391 19.099609 17.900391 C 19.299609 18.300391 19.499609 18.799609 19.599609 19.099609 C 19.699609 19.399609 19.800391 19.600781 19.900391 19.800781 C 19.900391 19.900781 20 19.900391 20 19.900391 C 19.8 20.300391 19.8 20.399219 19.5 20.699219 C 19.2 21.099219 18.799219 21.499219 18.699219 21.699219 C 18.599219 21.899219 18.299609 22.1 18.099609 22.5 C 17.899609 22.9 18.000781 23.599609 18.300781 24.099609 C 18.700781 24.699609 19.900781 26.700391 21.800781 28.400391 C 23.000781 29.500391 24.1 30.199609 25 30.599609 C 25.9 31.099609 26.600781 31.300391 26.800781 31.400391 C 27.200781 31.600391 27.599609 31.699219 28.099609 31.699219 C 28.599609 31.699219 29.000781 31.3 29.300781 31 C 29.700781 30.6 30.699219 29.399609 31.199219 28.599609 L 31.400391 28.699219 C 31.400391 28.699219 31.699609 28.8 32.099609 29 C 32.499609 29.2 32.900391 29.399609 33.400391 29.599609 C 34.300391 29.999609 35.100391 30.399609 35.400391 30.599609 L 36 30.900391 L 36 31.199219 C 36 31.599219 35.899219 32.200781 35.699219 32.800781 C 35.599219 33.100781 35.000391 33.699609 34.400391 34.099609 C 33.700391 34.499609 32.899609 34.800391 32.599609 34.900391 C 31.699609 35.000391 30.600781 35.099219 29.300781 34.699219 C 28.500781 34.399219 27.4 34.1 26 33.5 C 23.2 32.3 20.899219 30.3 19.199219 28.5 C 18.399219 27.6 17.699219 26.799219 17.199219 26.199219 C 16.699219 25.599219 16.500781 25.2 16.300781 25 C 15.900781 24.6 14 21.999609 14 19.599609 C 14 17.099609 15.200781 16.100391 15.800781 15.400391 C 16.100781 15.000391 16.499609 15 16.599609 15 z"></path>
                </svg>
              </a>

              {/* <a href="https://hr.airbnb.com/rooms/1407086960356766602?viralityEntryPoint=1&s=76" target="_blank" rel="noopener noreferrer" aria-label="AirBnb" className="hover:text-[#C9911F]">
                <FaAirbnb />
              </a> */}
              <a
                href="https://hr.airbnb.com/rooms/1407086960356766602?viralityEntryPoint=1&s=76"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#FF5A5F]" // Airbnb brand color
                aria-label="Airbnb listing"
                title="Airbnb"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12.001 16.709c-1.013-1.271-1.609-2.386-1.808-3.34-.197-.769-.12-1.385.218-1.848.357-.532.89-.791 1.589-.791s1.231.259 1.589.796c.335.458.419 1.075.215 1.848-.218.974-.813 2.087-1.808 3.341l.005-.006zm7.196.855c-.14.934-.775 1.708-1.65 2.085-1.687.734-3.359-.437-4.789-2.026 2.365-2.961 2.803-5.268 1.787-6.758-.596-.855-1.449-1.271-2.544-1.271-2.206 0-3.419 1.867-2.942 4.034.276 1.173 1.013 2.506 2.186 3.996-.735.813-1.432 1.391-2.047 1.748-.478.258-.934.418-1.37.456-2.008.299-3.582-1.647-2.867-3.656.1-.259.297-.734.634-1.471l.019-.039c1.097-2.382 2.43-5.088 3.961-8.09l.039-.1.435-.836c.338-.616.477-.892 1.014-1.231.258-.157.576-.235.934-.235.715 0 1.271.418 1.511.753.118.18.259.419.436.716l.419.815.06.119c1.53 3.001 2.863 5.702 3.955 8.089l.02.019.401.915.237.573c.183.459.221.915.16 1.393l.001.002zm.913-1.791c-.139-.438-.378-.953-.675-1.569v-.022a262.99 262.99 0 0 0-3.976-8.128l-.084-.121C14.486 4.109 13.849 3.014 12 3.014c-1.827 0-2.604 1.27-3.397 2.922l-.061.119c-1.251 2.426-2.564 5.128-3.975 8.13v.039l-.418.914c-.158.378-.237.575-.259.636C2.878 18.556 4.964 21 7.489 21c.021 0 .099 0 .198-.021h.278c1.313-.159 2.664-.993 4.035-2.485 1.371 1.49 2.725 2.326 4.033 2.485h.279c.1.021.18.021.2.021 2.525.002 4.61-2.444 3.598-5.227z"/>
                </svg>
              </a>

              {/* <a href="https://www.booking.com/hotel/hr/villa-m-vodice.hr.html" target="_blank" rel="noopener noreferrer" aria-label="AirBnb" className="hover:text-[#C9911F]">
                <TbBrandBooking />
              </a> */}
              <a
                href="https://www.booking.com/hotel/hr/villa-m-vodice.hr.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-blue-600"
                aria-label="Booking.com"
              >
                <svg clipRule="evenodd" fillRule="evenodd" height="24" width="24" strokeLinejoin="round" strokeMiterlimit="1.414" viewBox="-.092 .015 2732.125 2671.996" xmlns="http://www.w3.org/2000/svg">
                  <path d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z" fill="currentColor"/>
                  <path d="m.001 1659.991h1364.531v1012.019h-1364.53z" fill="currentColor"/>
                    <g fillRule="nonzero">
                      <path d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244" fill="#fff"/>
                      <path d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.669 72.402 161.669 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894" fill="#00bafc"/>
                    </g>
                </svg>
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