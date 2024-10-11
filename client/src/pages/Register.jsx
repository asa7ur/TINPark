import { Form, redirect, useNavigation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { FormRow } from '../components'
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/register', data)
    return redirect('/login')
  } catch (error) {
    return error
  }
}

const Register = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'Registrando'

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h3>Registrarse</h3>
        <FormRow
          type='text'
          name='name'
          labelText='nombre'
          defaultValue='Garik'
        />
        <FormRow
          type='text'
          name='lastName'
          labelText='Apellidos'
          defaultValue='Asatryan'
        />
        <FormRow
          type='email'
          name='email'
          labelText='correo electrónico'
          defaultValue='asa7ur@proton.me'
        />
        <FormRow
          type='password'
          name='password'
          labelText='contraseña'
          defaultValue='secret123'
        />
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Registrando' : 'registrarse'}
        </button>
        <p>
          ¿Ya eres miembro?
          <Link to='/login' className='member-btn'>
            Entrar
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}
export default Register

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  align-items: center;
  padding: 1rem;
  background: var(--backgroundColorAltAlt);

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
