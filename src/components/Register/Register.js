import './Register.css';
import { useEffect } from 'react';
import useForm from '../hooks/useForm';
import { endpointMain, endpointLogin } from '../../vendor/constants/endpoints';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import MyInput from '../UI/MyInput/MyInput';

export default function Register() {
  const buttonText = 'Зарегистрироваться';

  const { values, errors, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    values.name = '';
    values.email = '';
    values.password = '';
    errors.name = '';
    errors.email = '';
    errors.password = '';
  });

  const disableButton = errors.name !== '' || errors.email !== '';

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitting register form');
    console.log(values);
  }

  return (
    <main>
      <section className='register'>
        <form className='register__form'>
          <Link to={endpointMain}>
            <img
              className='register__logo button'
              src={logo}
              alt='логотип'
            />
          </Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <label
            className='register__label'
            htmlFor='register__name'
          >
            Имя{' '}
          </label>
          <MyInput
            id='register__name'
            name='name'
            type='text'
            required
            minLength='2'
            maxLength='30'
            placeholder='Виталий'
            value={values.name}
            onChange={handleChange}
          />
          <span className='register__error'>{errors.name}</span>

          <label
            className='register__label'
            htmlFor='register__email'
          >
            E-mail{' '}
          </label>
          <MyInput
            id='register__email'
            name='email'
            type='email'
            required
            minLength='2'
            maxLength='30'
            placeholder='pohta@yandex.ru'
            value={values.email}
            onChange={handleChange}
          />
          <span className='register__error'>{errors.email}</span>

          <label
            className='register__label'
            htmlFor='register__password'
          >
            Пароль{' '}
          </label>
          <MyInput
            id='register__password'
            name='password'
            type='password'
            required
            placeholder='введите пароль'
            minLength='5'
            maxLength='30'
            value={values.password}
            onChange={handleChange}
          />
          <span className='register__error'>{errors.password}</span>
          <button
            className='register__button button'
            aria-label={buttonText}
            disabled={disableButton}
            onClick={handleSubmit}
            type='submit'
          >
            {buttonText}
          </button>
          <p className='register__paragraph'>
            Уже зарегистрированы ?
            <Link
              className='register__link link'
              to={endpointLogin}
            >
              {' '}
              Войти
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
