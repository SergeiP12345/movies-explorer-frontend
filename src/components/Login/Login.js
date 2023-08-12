import './Login.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useForm from '../hooks/useForm';
import MyInput from '../UI/MyInput/MyInput';
import {
  endpointMain,
  endpointRegister,
} from '../../vendor/constants/endpoints';
import logo from '../../images/logo.svg';

export default function Login() {
  const buttonText = 'Войти';

  const { values, errors, handleChange } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    values.email = '';
    values.password = '';
    errors.email = '';
    errors.password = '';
  });

  const disableButton = errors.password !== '' || errors.email !== '';

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitting login form');
    console.log(values);
  }
  return (
    <main>
      <section className='login'>
        <form className='login__form'>
          <Link to={endpointMain}>
            <img
              className='login__logo button'
              src={logo}
              alt='логотип'
            />
          </Link>
          <h1 className='login__title'>Рады видеть!</h1>
          <label
            className='login__label'
            htmlFor='login__email'
          >
            E-mail
          </label>
          <MyInput
            id='login__email'
            name='email'
            type='email'
            required
            minLength='2'
            maxLength='30'
            placeholder='введите е-майл'
            value={values.email}
            onChange={handleChange}
          />{' '}
          <span className='login__error'>{errors.email}</span>
          <label
            className='login__label'
            htmlFor='login__password'
          >
            Пароль
          </label>
          <MyInput
            id='login__password'
            name='password'
            type='password'
            required
            minLength='5'
            maxLength='30'
            placeholder='введите пароль'
            value={values.password}
            onChange={handleChange}
          />{' '}
          <span className='login__error'>{errors.password}</span>
          <button
            className='login__button button'
            aria-label={buttonText}
            disabled={disableButton}
            onClick={handleSubmit}
            type='submit'
          >
            {buttonText}
          </button>
          <p className='login__paragraph'>
            Ещё не зарегистрированы ?
            <Link
              className='login__link link'
              to={endpointRegister}
            >
              {' '}
              Регистрация
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
