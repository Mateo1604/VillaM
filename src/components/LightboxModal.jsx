export default function LightboxModal({ images, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-5 text-white text-4xl px-2 py-1 bg-black/40 rounded hover:bg-black/60"
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Full view"
        className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-5 text-white text-4xl px-2 py-1 bg-black/40 rounded hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
}
