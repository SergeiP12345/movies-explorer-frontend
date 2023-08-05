import { endpointAdaptiveWeb, endpointSPA, endpointStaticWeb } from '../../vendor/constants/endpoints'
import './Portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__items list'>
                <li className='portfolio__item'>
                    <Link className='portfolio__link link' target='_blank' to={endpointStaticWeb}>Статичный сайт</Link>
                    <Link className='portfolio__link link' target='_blank' to={endpointStaticWeb}>↗</Link>
                </li>
                
                <li className='portfolio__item'>
                    <Link className='portfolio__link link'  target='_blank' to={endpointAdaptiveWeb}>Адаптивный сайт</Link>
                    <Link className='portfolio__link link' target='_blank' to={endpointAdaptiveWeb}>↗</Link>
                </li>
                <li className='portfolio__item'>
                    <Link className='portfolio__link link' target='_blank' to={endpointSPA}>Одностраничное приложение</Link>
                    <Link className='portfolio__link link' target='_blank' to={endpointSPA}>↗</Link>
                </li>
            </ul>
        </section>
    )
}
