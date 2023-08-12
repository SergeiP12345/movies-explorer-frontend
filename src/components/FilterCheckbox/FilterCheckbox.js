import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

export default function FilterCheckbox({ isShort, setShort }) {
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === '/saved-movies' ? 'filter__saved' : 'filter'
      }
    >
      <input
        className='filter__checkbox'
        type='checkbox'
        id='search__checkbox'
        name='filter__checkbox'
        checked={isShort}
        onChange={() => {}}
      />
      <span
        className='filter__visible-checkbox'
        onClick={setShort}
      ></span>
      <label
        className='filter__label'
        htmlFor='search__checkbox'
      >
        Короткометражки
      </label>
    </div>
  );
}
