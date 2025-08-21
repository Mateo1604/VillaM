import { useState, useEffect } from "react";
import LightboxModal from "../components/LightboxModal";

export default function Gallery() {
  // Load all images from the gallery folder
  const images = import.meta.glob("../assets/gallery/full/*.{jpg,jpeg,png,webp}", { eager: true });
  const thumbs = import.meta.glob("../assets/gallery/thumbs/*.{jpg,jpeg,png,webp}", { eager: true });

  // Convert object to array and sort by filename
  const sortedImages = Object.values(images)
    .map((mod) => mod.default)
    .sort((a, b) => a.localeCompare(b));

  const sortedThumbs = Object.values(thumbs)
    .map((mod) => mod.default)
    .sort((a, b) => a.localeCompare(b));

  // State for infinite scroll
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window == "undefined") return 12;
    const w = window.innerWidth;
    if (w >= 1024) return 16; // Desktop
    if (w >= 768) return 12; // Tablet
    return 10 // Mobile
  });

  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        setVisibleCount((prev) => Math.min(prev + 8, sortedThumbs.length));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedThumbs.length]);

  // Ensure enough images load to be able to scroll
  useEffect(() => {
    let triedExtraLoad = false;

    const ensureScrollable = () => {
      const scrollable = document.documentElement.scrollHeight > window.innerHeight + 40;
      if (!scrollable && !triedExtraLoad) {
        triedExtraLoad = true;
        setVisibleCount((prev) => {
          return Math.min(prev + 1, sortedThumbs.length);
        });
      }
    };

    const id = requestAnimationFrame(ensureScrollable);
    window.addEventListener("resize", ensureScrollable);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", ensureScrollable)
    }
  }, [sortedThumbs.length, visibleCount]);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  const showPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev - 1));
  const showNext = () =>
    setCurrentIndex((prev) => (prev === sortedImages.length - 1 ? 0 : prev + 1));

return (
  <div className="pt-10">  {/* 64px = just enough to clear h-14 navbar */}
    {/* full-bleed breakout */}
    {/* <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-0"> */}
      <div className="max-w-6x1 mx-auto mt-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {sortedThumbs.slice(0, visibleCount).map((src, i) => (
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
