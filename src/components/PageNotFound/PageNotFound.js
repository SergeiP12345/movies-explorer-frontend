import './PageNotFound.css';
import { Link } from 'react-router-dom';
export default function PageNotFound() {
  return (
    <main>
      <section className='page-not-found'>
        <h1 className='page-not-found__title'>404</h1>
        <p className='page-not-found__text'>Страница не найдена</p>
        <Link
          className='page-not-found__link link'
          to={-1}
        >
          Назад
        </Link>
      </section>
    </main>
  );
}
