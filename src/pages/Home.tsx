import { Link } from 'react-router-dom';
import { TeamSelect } from '../components/TeamSelect/TeamSelect';

export function Home() {
  return (
    <main className="flex-1 relative flex flex-col items-center justify-center gap-10 px-6 bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/background.webp')" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 -translate-y-[120px] md:translate-y-0">
        <Link
          to="/curintia"
          className="bg-corinthians-red text-white font-display text-3xl md:text-4xl px-12 py-5 rounded-full no-underline hover:brightness-110 transition-all shadow-lg tracking-wider"
        >
          Aqui é curintia
        </Link>

        <div className="flex flex-col items-center gap-4">
          <span className="text-white font-display text-2xl md:text-3xl tracking-wide">
            Sai fora mano, sou:
          </span>
          <TeamSelect />
        </div>
      </div>
    </main>
  );
}
