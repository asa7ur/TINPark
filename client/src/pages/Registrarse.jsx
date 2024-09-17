import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FormRow } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h3>Registrarse</h3>
        <FormRow type='text' name='nombre' defaultValue='Garik' />
        <FormRow
          type='text'
          name='lastName'
          labelText='Apellidos'
          defaultValue='Asatryan'
        />
        <FormRow type='email' name='correo electrónico' defaultValue='asa7ur@proton.me' />
        <FormRow type='password' name='contraseña' defaultValue='secret123' />
        <button type='submit' className='btn btn-block'>
          enviar
        </button>
        <p>
          ¿Ya eres miembro?
          <Link to='/login' className='member-btn'>
            Entrar
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  h3 {
    text-align: center;
    margin-bottom: 1.38rem;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }

  .btn {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: 5px;
    letter-spacing: var(--letter-spacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
  }

  .btn:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }

  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`
