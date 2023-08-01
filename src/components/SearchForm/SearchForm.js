import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import find from '../../images/find.svg';
export default function SearchForm({ isShort, setShort, isLoggedIn }) {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__container'>
          <input className='search__input' type='search' placeholder='Фильм' />
          <button
            className='search__button button'
            type='submit'
            aria-label='Поиск'
          >
            {' '}
            <img className='header__logo button' src={find} alt='логотип' />
          </button>
        </div>
        <FilterCheckbox isShort={isShort} setShort={setShort} />
      </form>
    </section>
  );
}
