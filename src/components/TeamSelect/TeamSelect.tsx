import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teams } from '../../data/teams';
import './TeamSelect.css';

export function TeamSelect() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = teams.filter((t) =>
    t.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .includes(
        search
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase(),
      ),
  );

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) {
        setSearch('');
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      return !prev;
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(slug: string) {
    setIsOpen(false);
    navigate(`/perdeu?time=${slug}`);
  }

  return (
    <div ref={containerRef} className="team-select-container">
      <button type="button" className="team-select-trigger" onClick={toggle}>
        <span>Escolha seu time...</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`team-select-chevron ${isOpen ? 'open' : ''}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="team-select-dropdown">
          <div className="team-select-search">
            <input
              ref={inputRef}
              type="text"
              placeholder="Filtrar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul>
            {filtered.map((team) => (
              <li key={team.slug}>
                <button type="button" onClick={() => handleSelect(team.slug)}>
                  <img src={team.badge} alt="" />
                  {team.name}
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="team-select-empty">Nenhum time encontrado</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
