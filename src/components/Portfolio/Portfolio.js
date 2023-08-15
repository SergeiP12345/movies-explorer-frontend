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
        <li>
          <Link
            className='portfolio__item'
            to={endpointStaticWeb}
            target='_blank'
          >
            <p
              className='portfolio__link link'
              rel='noreferrer'
            >
              Статичный сайт
            </p>
            <p className='portfolio__span'>↗</p>
          </Link>
        </li>

        <li>
          <Link
            className='portfolio__item '
            to={endpointAdaptiveWeb}
            target='_blank'
          >
            <p
              className='portfolio__link link'
              rel='noreferrer'
            >
              Адаптивный сайт
            </p>
            <span className='portfolio__span'>↗</span>
          </Link>
        </li>

        <li>
          <Link
            className='portfolio__item'
            to={endpointSPA}
            target='_blank'
          >
            <p
              className='portfolio__link link'
              rel='noreferrer'
            >
              Одностраничное приложение
            </p>
            <span className='portfolio__span'>↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
