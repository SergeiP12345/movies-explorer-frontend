import './AboutMe.css';
import { Link } from 'react-router-dom';
import { endpointMyGithub } from '../../vendor/constants/endpoints';
import myPortfolioImage from '../../images/portfolio.jpg';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__header '>Студент</h2>
      <article className='about-me__article'>
        <img
          className='about-me__image'
          src={myPortfolioImage}
          alt='мое фото'
        />
        <h2 className='about-me__title'>Виталий</h2>
        <h3 className='about-me__description'>Фронтенд-разработчик, 30 лет</h3>
        <p className='about-me__text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <Link
          className='about-me__link link'
          to={endpointMyGithub}
          target='_blank'
        >
          Github
        </Link>
      </article>
    </section>
  );
}
