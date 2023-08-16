import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { mainApi } from '../../utils/MainApi';
import { useEffect } from 'react';

export default function MoviesCardList({
  currentUser,
  isSavedMoviesPage,
  isLoading,
  movies,
  setSavedMovies,
  savedMovies,
  maxMovies,
  setMaxMovies,
  showMore,
  connectionError,
  formValue,
}) {
  const token = localStorage.getItem('token');

  function deleteFromList(movie) {
    const movieToDelete = savedMovies.find(
      (m) =>
        m.owner === currentUser._id && m.movieId === (movie.id || movie.movieId)
    );
    if (!movieToDelete) return;
    mainApi
      .deleteMovie(movieToDelete._id, token)
      .then((res) => {
        setSavedMovies(savedMovies.filter((m) => m._id !== movieToDelete._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function addToList(movie) {
    mainApi
      .addMovie(movie, token)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function isSavedMovie(movie) {
    return savedMovies.some(
      (item) => item.owner === currentUser._id && movie.id === item.movieId
    );
  }

  function handleMoreClick() {
    setMaxMovies(maxMovies + showMore);
  }

  let isEmpty = isSavedMoviesPage
    ? formValue === ''
    : localStorage.getItem('searchInput') === '';

  const isSearched = localStorage.getItem('searchInput') !== null;

  let showMovies = movies.slice(0, maxMovies);
  console.log(`movies quantity: "${movies.length}"`);
  console.log(`showMovies quantity: "${showMovies.length}"`);
  console.log(`значение поля: '${formValue}'`);

  const Cards = () => {
    return (
      <ul className='movies-card__list list'>
        {showMovies.map((movie) => (
          <li
            className='movies-card__item'
            key={movie._id ? movie._id : movie.id}
          >
            <MoviesCard
              isSavedMoviesPage={isSavedMoviesPage}
              movie={movie}
              isSavedMovie={isSavedMovie}
              addToList={addToList}
              deleteFromList={deleteFromList}
            />
          </li>
        ))}
      </ul>
    );
  };

  const MoreButton = () => {
    return showMovies.length > 3 && showMovies.length < movies.length ? (
      <button
        className='movies-card__button'
        aria-label='Eщё'
        type='button'
        onClick={handleMoreClick}
      >
        Eщё
      </button>
    ) : (
      <></>
    );
  };
  //----------------------------------------------------------------------
  return (
    <section className='movies-card'>
      {connectionError ? (
        <p className='movies-card__not-found'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : isLoading ? (
        <Preloader />
      ) : isSearched ? (
        isEmpty ? (
          isSavedMoviesPage ? (
            <>
              <p>
                показать все(savedMovies, был поиск в локалке, пустая строка)
              </p>
              {Cards()}
              {MoreButton()}
            </>
          ) : (
            <p className='movies-card__not-found'>
              ничего не найдено...(movies, был поиск в локалке, пустая строка )
            </p>
          )
        ) : showMovies.length > 0 ? (
          <>
            <p>Показать результат(не пустая строка)</p>
            {Cards()}
            {MoreButton()}
          </>
        ) : (
          <p className='movies-card__not-found'>
            ничего не найдено...(результат поиска)
          </p>
        )
      ) : isSavedMoviesPage ? (
        formValue === '' ? (
          <>
            <p>
              показать все(savedMovies, поиска не было в локалке, пустая строка)
            </p>
            {Cards()}
            {MoreButton()}
          </>
        ) : showMovies.length > 0 ? (
          <>
            <p>
              показать результат поиска(savedMovies, поиска не было в локалке,
              не пустая строка('{formValue}'))
            </p>
            {Cards()}
            {MoreButton()}
          </>
        ) : (
          <p className='movies-card__not-found'>
            ничего не найдено...(результат поиска поиска не было в локалке, не
            пустая строка)
          </p>
        )
      ) : (
        <p>не показывать ничего(поиска не было)</p>
      )}
    </section>
  );
}
