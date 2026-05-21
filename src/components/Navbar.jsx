import { Link, useLocation } from 'react-router-dom';
import NavHashLink from './NavHashLink.jsx';
import useScrollNavbar from '../hooks/useScrollNavbar.js';
import { scrollToTop } from '../utils/scrollToTop.js';

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const visible = useScrollNavbar();

  return (
    <>
      <div className="navbar-spacer" aria-hidden="true" />
      <div className={`navbar-fixed${visible ? ' navbar-fixed--visible' : ' navbar-fixed--hidden'}`}>
        <nav className="navbar">
          <div className="nav-links">
            <div className="nav-links-menu">
              <Link to="/" className={isHome ? 'active-link' : undefined} onClick={scrollToTop}>Home</Link>
              <Link to="/about" className={isAbout ? 'active-pill' : undefined} onClick={scrollToTop}>Our History</Link>
              <NavHashLink hash="team">Team</NavHashLink>
              <NavHashLink hash="mission">Our Mission</NavHashLink>
              <a href="#">Gallery</a>
              <a href="#">Contact Us</a>
            </div>
            <a href="#" className="btn-join">Join Us</a>
          </div>
        </nav>
      </div>
    </>
  );
}
