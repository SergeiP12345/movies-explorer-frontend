import {
  endpointAdaptiveWeb,
  endpointSPA,
  endpointStaticWeb,
} from '../../vendor/constants/endpoints';
import './Portfolio.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__items list'>
        <Link
          className='link '
          to={endpointStaticWeb}
        >
          <li className='portfolio__item'>
            <p
              className='portfolio__link link'
              rel='noreferrer'
              to={endpointStaticWeb}
              target='_blank'
            >
              Статичный сайт
            </p>
            <p className='portfolio__span'>↗</p>
          </li>
        </Link>
        <Link
          className='link '
          to={endpointAdaptiveWeb}
        >
          <li className='portfolio__item'>
            <p
              className='portfolio__link link'
              rel='noreferrer'
              target='_blank'
            >
              Адаптивный сайт
            </p>
            <span className='portfolio__span'>↗</span>
          </li>
        </Link>

        <Link
          className='link '
          to={endpointSPA}
        >
          <li className='portfolio__item'>
            <p
              className='portfolio__link link'
              rel='noreferrer'
              target='_blank'
            >
              Одностраничное приложение
            </p>
            <span className='portfolio__span'>↗</span>
          </li>
        </Link>
      </ul>
    </section>
  );
}
