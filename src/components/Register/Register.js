import './Register.css';
import { validate, res } from 'react-email-validator';
import { useEffect } from 'react';
import { useFormWithValidation } from '../hooks/useForm';
import {
  ENDPOINT_MAIN,
  ENDPOINT_LOGIN,
} from '../../vendor/constants/endpoints';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import MyInput from '../UI/MyInput/MyInput';

export default function Register({ errorMessage, handleRegistration }) {
  const buttonText = 'Зарегистрироваться';

  const { values, errors, handleChange, isValid } = useFormWithValidation({
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
    errors.password = ''; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration(values);
  }

  return (
    <section className='register'>
      <form
        className='register__form'
        onSubmit={handleSubmit}
      >
        <Link to={ENDPOINT_MAIN}>
          <img
            className='register__logo button'
            src={logo}
            alt='логотип'
          />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <label
          className='register__label'
          htmlFor='register__name'
        >
          Имя
          <MyInput
            id='register__name'
            name='name'
            error={errors.name}
            type='text'
            required
            minLength='2'
            maxLength='30'
            placeholder='введите имя'
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label
          className='register__label'
          htmlFor='register__email'
        >
          E-mail
          <MyInput
            id='register__email'
            name='email'
            error={res ? errors.email : errors.email}
            type='email'
            required
            minLength='2'
            maxLength='30'
            placeholder='введите е-майл'
            value={values.email}
            onChange={(e) => {
              validate(e.target.value);

              handleChange(e);
            }}
          />
        </label>
        <label
          className='register__label'
          htmlFor='register__password'
        >
          Пароль
          <MyInput
            id='register__password'
            name='password'
            error={errors.password}
            type='password'
            required
            placeholder='введите пароль'
            value={values.password}
            onChange={handleChange}
          />
        </label>
        {errorMessage ? (
          <p className='form__error-message'>{errorMessage}</p>
        ) : (
          <></>
        )}
        {isValid ? (
          <button
            className='login__button button '
            aria-label={buttonText}
            type='submit'
            disabled={!isValid}
          >
            {' '}
            {buttonText}
          </button>
        ) : (
          <button
            className='login__button button button_disabled'
            aria-label={buttonText}
            type='submit'
            disabled={!isValid}
          >
            {' '}
            {buttonText}
          </button>
        )}
        <p className='register__paragraph'>
          Уже зарегистрированы ?
          <Link
            className='register__link link'
            to={ENDPOINT_LOGIN}
          >
            {' '}
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}
