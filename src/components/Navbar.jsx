import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const linkClass = (path) =>
    `px-4 py-2 transition ${
      location.pathname === path
        ? "text-[#C9911F] font-semibold"
        : "text-neutral-700 hover:text-[#C9911F]"
    }`;

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
        <Link to="/" className="text-xl font-serif text-[#C9911F]">
          Villa M
        </Link>
        <div className="flex gap-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/gallery" className={linkClass("/gallery")}>
            Gallery
          </Link>
          <Link to="/book" className={linkClass("/book")}>
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
}
