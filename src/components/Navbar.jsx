import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavHashLink from './NavHashLink.jsx';
import useScrollNavbar from '../hooks/useScrollNavbar.js';
import { scrollToTop } from '../utils/scrollToTop.js';

function closeMenu(setMenuOpen) {
  setMenuOpen(false);
}

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const visible = useScrollNavbar();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    scrollToTop();
    closeMenu(setMenuOpen);
  };

  return (
    <>
      <div className="navbar-spacer max-lg:h-[calc(1rem+58px)]" aria-hidden="true" />
      <div className={`navbar-fixed max-lg:px-3 max-lg:pt-4${visible ? ' navbar-fixed--visible' : ' navbar-fixed--hidden'}`}>
        <nav className="navbar">
          <div className="nav-links max-lg:flex-col max-lg:rounded-3xl max-lg:pl-0 max-lg:gap-0">
            <div className="max-lg:flex lg:hidden max-lg:items-center max-lg:justify-between max-lg:w-full max-lg:px-4 max-lg:py-2">
              <button
                type="button"
                className="flex flex-col justify-center gap-1.5 p-1"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className={`block h-0.5 w-6 bg-[#1A1A1A] transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-6 bg-[#1A1A1A] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-[#1A1A1A] transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </button>
              <a href="#" className="btn-join max-lg:rounded-2xl max-lg:border-l-0 max-lg:px-4 max-lg:py-2 max-lg:self-auto max-lg:ml-0 max-lg:min-h-0">
                Join Us
              </a>
            </div>

            <div
              className={`nav-links-menu ${menuOpen ? 'max-lg:flex' : 'max-lg:hidden'} max-lg:flex-col max-lg:items-start max-lg:gap-3 max-lg:px-4 max-lg:py-3 max-lg:w-full max-lg:flex-none max-lg:justify-start`}
            >
              <Link to="/" className={isHome ? 'active-link' : undefined} onClick={handleNavClick}>Home</Link>
              <Link to="/about" className={isAbout ? 'active-pill' : undefined} onClick={handleNavClick}>Our History</Link>
              <NavHashLink hash="team" onClick={() => closeMenu(setMenuOpen)}>Team</NavHashLink>
              <NavHashLink hash="mission" onClick={() => closeMenu(setMenuOpen)}>Our Mission</NavHashLink>
              <a href="#" onClick={() => closeMenu(setMenuOpen)}>Gallery</a>
              <a href="#" onClick={() => closeMenu(setMenuOpen)}>Contact Us</a>
            </div>

            <a href="#" className="btn-join max-lg:hidden">Join Us</a>
          </div>
        </nav>
      </div>
    </>
  );
}
