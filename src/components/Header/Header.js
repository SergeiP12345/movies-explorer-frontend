import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import { endpointMain } from '../../vendor/constants/endpoints';
import { useLocation } from 'react-router-dom';

export default function Header({ isLoggedIn, onOpen }) {
  const location = useLocation();
  return (
    <header
      className={location.pathname === '/' ? 'header' : 'header__logged-in'}
    >
      <Link to={endpointMain}>
        <img className='header__logo button' src={logo} alt='логотип' />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} onOpen={onOpen} />
    </header>
  );
}
