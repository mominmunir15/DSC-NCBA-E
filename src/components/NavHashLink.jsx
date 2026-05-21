import { useLocation, useNavigate } from 'react-router-dom';

export default function NavHashLink({ hash, children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/') {
    return <a href={`#${hash}`}>{children}</a>;
  }

  return (
    <a
      href={`/#${hash}`}
      onClick={(event) => {
        event.preventDefault();
        navigate('/');
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView();
        }, 100);
      }}
    >
      {children}
    </a>
  );
}
