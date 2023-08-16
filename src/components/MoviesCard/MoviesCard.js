import './MoviesCard.css'
import { Link } from 'react-router-dom';
import { FILM_IMAGES_SERVER_URL } from '../../utils/config';

export default function MoviesCard({
    isSavedMoviesPage,
    addToList,
    deleteFromList,
    movie,
    isSavedMovie
}) {
    function handleClick() {
        isSavedMoviesPage
            ? deleteFromList(movie)
            : isSavedMovie(movie)
                ? deleteFromList(movie)
                : addToList(movie)

    }

    const buttonText = isSavedMoviesPage ? '' : isSavedMovie(movie) ? '' : 'Сохранить';
    const trailerLink = movie.trailerLink;
    const title = movie.nameRU;
    const duration = (`
    ${Math.floor(movie.duration / 60)}ч 
    ${movie.duration % 60}м`);
    const imageLink = FILM_IMAGES_SERVER_URL + movie.image.url;

    return (
        <div className="card" >
            <Link
                className='card__link link'
                to={trailerLink}
                target='_blank'>
                <img
                    className="card__image"
                    src={
                        movie.thumbnail
                            ? movie.thumbnail
                            : imageLink
                    }
                    alt={`постер "${title}"`} />
            </Link>
            <button className={
                isSavedMoviesPage
                    ? 'card__button saved-movie'
                    : isSavedMovie(movie)
                        ? 'card__button saved'
                        : 'card__button'
            }
                onClick={handleClick}
                aria-label={buttonText}>
                {buttonText}
            </button>
            <div className='card__footer'>
                <p className='card__title'>{title}</p>
                <p className='card__duration'>{duration}</p>
            </div>
        </div>
    )
}