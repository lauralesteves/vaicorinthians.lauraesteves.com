import { AudioButton } from '../components/AudioButton/AudioButton';

export function Curintia() {
  return (
    <main className="flex-1 flex flex-col items-start justify-center pl-10 md:pl-20 lg:pl-32 pr-6 bg-cover bg-center bg-no-repeat curintia-bg">
      <h1
        className="font-display text-white text-5xl md:text-7xl lg:text-8xl text-left leading-tight max-w-4xl mt-[200px] md:mt-0"
        style={{ WebkitTextStroke: '2px #CC2031', textShadow: '1px 2px 4px rgba(0, 0, 0, .45)' }}
      >
        PESSO PERDAUM PELO VASILO, NUM MI ROBE
      </h1>

      <AudioButton src="/audio/hino-corinthians.mp3" />

      <style>{`
        .curintia-bg {
          background-image: url('/images/curintia_mobile_background.webp');
        }
        @media (min-width: 768px) {
          .curintia-bg {
            background-image: url('/images/curintia_desktop_background.webp');
          }
        }
      `}</style>
    </main>
  );
}
