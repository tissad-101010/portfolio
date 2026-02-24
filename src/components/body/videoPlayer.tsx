import { useState } from "react";

type VideoPlayerProps = {
  src: string;
};


export default function VideoModal(src: VideoPlayerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}         className="
          inline-flex items-center gap-2
          rounded-full
          bg-gradient-to-r from-indigo-500 to-violet-500
          px-6 py-3
          text-sm font-semibold text-white
          shadow-lg shadow-indigo-500/40
          transition
          hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/50
          active:translate-y-0
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
        "       >
        ▶ Demo
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <video
            src={src.src}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            style={{ width: "80%", maxWidth: 800 }}
          />
        </div>
      )}
    </>
  );
}