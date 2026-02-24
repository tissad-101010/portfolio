import { useState } from "react";

type VideoPlayerProps = {
  src: string;
};

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-gradient-to-r from-indigo-500 to-violet-500
          px-6 py-3
          text-sm font-semibold text-white
          shadow-lg shadow-indigo-500/40
          transition
          hover:-translate-y-0.5 hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-indigo-400
        "
      >
        ▶ Watch Demo
      </button>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70 backdrop-blur-sm
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl px-4"
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute -top-10 right-2
                text-white/80
                hover:text-white
                text-2xl font-bold
                transition
              "
              aria-label="close"
            >
              ✕
            </button>

            {/* Vidéo */}
            <video
              src={src}
              controls
              autoPlay
              className="
                w-full
                rounded-xl
                shadow-2xl
              "
            />
          </div>
        </div>
      )}
    </>
  );
}