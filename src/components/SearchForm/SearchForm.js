import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import find from '../../images/find.svg';
import { useLocation } from 'react-router-dom';

export default function SearchForm({ isShort, setShort, isLoggedIn }) {
  const location = useLocation();
  return (
    <section
      className={
        location.pathname === '/saved-movies' ? 'search_saved' : 'search'
      }
    >
      <form className='search__form'>
        <div
          className={
            location.pathname === '/saved-movies'
              ? 'search__container_saved'
              : 'search__container'
          }
        >
          <input
            className='search__input'
            required
            type='search'
            placeholder='Фильм'
          />
          <button
            className='search__button button'
            type='submit'
            aria-label='Поиск'
          >
            {' '}
            <img
              className='header__logo button'
              src={find}
              alt='логотип'
            />
          </button>
        </div>
        <FilterCheckbox
          isShort={isShort}
          setShort={setShort}
        />
      </form>
    </section>
  );
}
