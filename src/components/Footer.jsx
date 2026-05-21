import { Link } from 'react-router-dom';
import NavHashLink from './NavHashLink.jsx';
import { SocialLinks } from './SocialIcons.jsx';

export default function Footer({ variant = 'default' }) {
  const footerClass = variant === 'red' ? 'site-footer footer-red' : 'site-footer';
  const footerStyle = variant === 'red' ? { marginTop: '2rem' } : undefined;

  return (
    <footer
      className={`${footerClass} max-lg:px-6 max-lg:pt-12 max-lg:pb-8 max-lg:rounded-t-3xl max-lg:mt-12`}
      style={footerStyle}
    >
      <div className="footer-content max-lg:flex-col max-lg:gap-8">
        <h2 className="footer-title max-lg:!text-4xl max-lg:max-w-none">DSC Built For<br />Students By<br />Students.</h2>
        <div className="sitemap-container">
          <div className="sitemap">
            <h3>Site map</h3>
            <div className="sitemap-cols max-lg:flex-col max-lg:gap-4">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><NavHashLink hash="team">Team</NavHashLink></li>
                <li><NavHashLink hash="mission">Our Mission</NavHashLink></li>
                <li><a href="#">Gallery</a></li>
              </ul>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Join Us</a></li>
              </ul>
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
