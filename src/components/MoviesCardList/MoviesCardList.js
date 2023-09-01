import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { mainApi } from '../../utils/MainApi';
import { useEffect, useState } from 'react';

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
  searchMovie,
  formValue,
  isShort,
}) {
  const [showMovies, setShowMovies] = useState([]);

  useEffect(() => {
    setShowMovies(movies.slice(0, maxMovies));
  }, [movies, maxMovies]);

  useEffect(() => {
    if (isSavedMoviesPage) {
      searchMovie(isSavedMoviesPage, formValue, isShort);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);
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
              {}
              {Cards()}
              {MoreButton()}
            </>
          ) : (
            <p className='movies-card__not-found'>ничего не найдено...</p>
          )
        ) : showMovies.length > 0 ? (
          <>
            {}
            {Cards()}
            {MoreButton()}
          </>
        ) : (
          <p className='movies-card__not-found'>ничего не найдено...</p>
        )
      ) : isSavedMoviesPage ? (
        formValue === '' ? (
          <>
            {}
            {Cards()}
            {MoreButton()}
          </>
        ) : showMovies.length > 0 ? (
          <>
            {}
            {Cards()}
            {MoreButton()}
          </>
        ) : (
          <p className='movies-card__not-found'>ничего не найдено...</p>
        )
      ) : (
        <></>
      )}
    </section>
  );
}
