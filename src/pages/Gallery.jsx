import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LightboxModal from "../components/LightboxModal";

export default function Gallery() {
  // Load all images from the gallery folder
  const images = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", { eager: true });

  // Convert object to array and sort by filename
  const sortedImages = Object.values(images)
    .map((mod) => mod.default)
    .sort((a, b) => a.localeCompare(b));

  // State for infinite scroll
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        setVisibleCount((prev) => Math.min(prev + 8, sortedImages.length));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedImages.length]);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  const showPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev - 1));
  const showNext = () =>
    setCurrentIndex((prev) => (prev === sortedImages.length - 1 ? 0 : prev + 1));

return (
  <div className="pt-10 px-4 sm:px-6">  {/* 64px = just enough to clear h-14 navbar */}
    {/* full-bleed breakout */}
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-0">
      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {sortedImages.slice(0, visibleCount).map((src, i) => (
            <button
              key={i}
              className="overflow-hidden rounded-lg cursor-pointer group block"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>
    </div>

    <LightboxModal
      images={sortedImages}
      currentIndex={currentIndex}
      onClose={closeLightbox}
      onPrev={showPrev}
      onNext={showNext}
    />
  </div>
);

}
