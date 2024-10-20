import { Link, Form, redirect, useNavigation } from 'react-router-dom'
import styled from 'styled-components'
import { FormRow, PageTransition } from '../components'
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/login', data)
    return redirect('/dashboard/homepage')
  } catch (error) {
    return error
  }
}

const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <PageTransition>
        <Form method='post' className='form'>
          <h3>Login</h3>
          <FormRow type='email' name='email' labelText='correo electrónico' />
          <FormRow type='password' name='password' labelText='contraseña' />
          <button
            type='submit'
            className='btn btn-block'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
          <p>
            ¿Aún no eres miembro?
            <Link to='/register' className='member-btn'>
              Registrarse
            </Link>
          </p>
        </Form>
      </PageTransition>
    </Wrapper>
  )
}
export default Login

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
