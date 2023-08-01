import './Promo.css';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__image'></div>
      <div className='promo__section'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='promo__text'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className='promo__button'>Узнать больше</button>
      </div>
    </section>
  );
}
