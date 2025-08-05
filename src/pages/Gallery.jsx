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
    <>
      <div className="pt-16">
      <div className="pt-20 p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Villa M Gallery</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sortedImages.slice(0, visibleCount).map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <LightboxModal
          images={sortedImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      </div>
      </div>
    </>
  );
}
