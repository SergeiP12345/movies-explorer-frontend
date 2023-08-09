import { Link } from 'react-router-dom';
import accountLogo from '../../images/account-icon.svg';
import accountLogo2 from '../../images/account-icon2.svg';
import './Navigation.css';
import {
  endpointLogin,
  endpointMovies,
  endpointProfile,
  endpointRegister,
  endpointSavedMovies,
} from '../../vendor/constants/endpoints';
import { useLocation } from 'react-router-dom';

export default function Navigation({ isLoggedIn, onOpen }) {
  const location = useLocation();
  return (
    <>
      {isLoggedIn ? (
        <nav className='navigation logged-in'>
          <ul className='navigation__list list navigation__movies navigation__list_logged-in'>
            <li className='navigation__item'>
              <Link
                className={location.pathname === '/' ? 'navigation__link_main navigation__link_active link navigation__link_logged-in' : 'navigation__link navigation__link_active link navigation__link_logged-in'}
                to={endpointMovies}
              >
                Фильмы
              </Link>
            </li>
            <li className='navigation__item'>
              <Link
                className={location.pathname === '/' ? 'navigation__link_main navigation__link_active link navigation__link_logged-in' : 'navigation__link navigation__link_active link navigation__link_logged-in'}
                to={endpointSavedMovies}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <ul className='navigation__list list navigation__account navigation__list_logged-in'>
            <li className={location.pathname === '/' ? 'navigation__item navigation__item_account'  : 'navigation__item navigation__item_account_main' }>
            <Link
                className={location.pathname === '/' ? 'navigation__link_main  link '  : 'navigation__link  link ' }
                to={endpointProfile}
              >{location.pathname === '/' ? 
              (<img
                className={location.pathname === '/' ? 'navigation__link_main  link '  : 'navigation__link  link ' }
                src={accountLogo2}
                alt='иконка аккаунта'
          
              />    ): <img
              className={location.pathname === '/' ? 'navigation__link_main  link '  : 'navigation__link  link ' }
              src={accountLogo}
              alt='иконка аккаунта'
        
            />}Аккаунт</Link>
            </li>
           
          </ul>
          <button
            className='navigation__popup-button'
            aria-label=''
            onClick={onOpen}
          ></button>
        </nav>
      ) : (
        <nav className='navigation'>
          <ul className='navigation__list list'>
            <li className='navigation__item'>
              <Link className='navigation__link link' to={endpointRegister}>
                Регистрация
              </Link>
            </li>
            <li className='navigation__item'>
              <Link
                className='navigation__link link navigation__button button'
                to={endpointLogin}
              >
                Вход
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
