import { useRef, useState } from 'react';

export default function VideoCard({ preview, url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative mx-auto w-full overflow-hidden rounded-brand-32 lg:rounded-[40px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        controls
        src={url}
        poster={preview}
        className="h-auto w-full object-cover"
      />

      {/* <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40"
      >
        {isPlaying ? (
          <div style={{ opacity: isHovered ? 1 : 0 }}>
            <PauseIcon />
          </div>
        ) : (
          <PlayIcon />
        )}
      </button> */}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="96" height="96" rx="48" fill="#151519" />
      <path
        d="M41 36.9851V59.0151C41.0033 59.1909 41.0528 59.3627 41.1437 59.5132C41.2345 59.6638 41.3635 59.7877 41.5175 59.8725C41.6715 59.9573 41.8452 60 42.021 59.9963C42.1967 59.9926 42.3684 59.9426 42.5188 59.8513L60.5287 48.8363C60.6726 48.7493 60.7916 48.6266 60.8741 48.4801C60.9567 48.3336 61.0001 48.1683 61.0001 48.0001C61.0001 47.8319 60.9567 47.6666 60.8741 47.5201C60.7916 47.3736 60.6726 47.2509 60.5287 47.1638L42.5188 36.1488C42.3684 36.0576 42.1967 36.0076 42.021 36.0039C41.8452 36.0002 41.6715 36.0429 41.5175 36.1277C41.3635 36.2125 41.2345 36.3364 41.1437 36.4869C41.0528 36.6375 41.0033 36.8093 41 36.9851Z"
        fill="white"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-16 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.3)" />
      <rect x="8" y="7" width="3" height="10" fill="white" />
      <rect x="13" y="7" width="3" height="10" fill="white" />
    </svg>
  );
}
