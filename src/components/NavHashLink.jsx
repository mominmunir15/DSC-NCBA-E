import { useLocation, useNavigate } from 'react-router-dom';

export default function NavHashLink({ hash, children, onClick }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/') {
    return <a href={`#${hash}`} onClick={onClick}>{children}</a>;
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
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
