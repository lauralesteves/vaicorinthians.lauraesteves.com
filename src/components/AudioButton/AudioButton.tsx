import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AudioButtonProps {
  src: string;
}

function SoundOnIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
      <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06Z" />
      <path d="M17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
    </svg>
  );
}

export function AudioButton({ src }: AudioButtonProps) {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audioRef.current = audio;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      });
      return;
    }

    setIsMuted((prev) => {
      audio.muted = !prev;
      return !prev;
    });
  }, [isPlaying]);

  const showMuted = !isPlaying || isMuted;

  return (
    <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="bg-white text-black rounded-full px-6 py-3 flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer font-body font-semibold"
        aria-label="Voltar"
      >
        <i className="fa-solid fa-arrow-left text-2xl w-8 h-8 flex items-center justify-center" aria-hidden="true" />
        <span className="text-sm uppercase">Voltar</span>
      </button>

      <button
        type="button"
        onClick={toggle}
        className="bg-white text-black rounded-full px-6 py-3 flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer font-body font-semibold"
        aria-label={showMuted ? 'Ativar som' : 'Desativar som'}
      >
        {showMuted ? <SoundOffIcon /> : <SoundOnIcon />}
        <span className="text-sm uppercase">
          {showMuted ? 'Som desligado' : 'Som ligado'}
        </span>
      </button>
    </div>
  );
}
