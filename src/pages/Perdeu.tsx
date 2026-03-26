import { useSearchParams } from 'react-router-dom';
import { AudioButton } from '../components/AudioButton/AudioButton';
import { getTeamBySlug } from '../data/teams';

export function Perdeu() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('time') || '';
  const team = getTeamBySlug(slug);
  const nickname = team?.nickname.toUpperCase() || 'OTÁRIO';

  return (
    <main className="flex-1 flex flex-col items-start justify-center pl-10 md:pl-20 lg:pl-32 pr-6 bg-cover bg-center bg-no-repeat perdeu-bg">
      <h1
        className="font-display text-white text-5xl md:text-7xl lg:text-8xl text-center leading-tight max-w-4xl w-full mt-[200px] md:mt-0"
        style={{
          WebkitTextStroke: '2px #CC2031',
          textShadow: '1px 2px 4px rgba(0, 0, 0, .45)',
        }}
      >
        Passa a carteira,
        <br />
        {nickname}
      </h1>

      <AudioButton src="/audio/sirene-policia.mp3" />

      <style>{`
        .perdeu-bg {
          background-image: url('/images/perdeu_mobile_background.webp');
        }
        @media (min-width: 768px) {
          .perdeu-bg {
            background-image: url('/images/perdeu_desktop_background.webp');
          }
        }
      `}</style>
    </main>
  );
}
