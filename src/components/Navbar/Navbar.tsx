import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { SocialIcons } from './SocialIcons';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center px-6 py-4 pr-[100px]">
        <Link
          to="/"
          className="font-logo text-white text-2xl hidden md:block no-underline hover:opacity-80 transition-opacity"
        >
          Vai Corinthians!
        </Link>

        <Link
          to="/"
          className="font-logo text-white text-xl md:hidden no-underline hover:opacity-80 transition-opacity"
        >
          Vai Corinthians!
        </Link>

        <div className="hidden md:flex items-center ml-auto">
          <SocialIcons />
        </div>

        <div className="ml-auto md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
