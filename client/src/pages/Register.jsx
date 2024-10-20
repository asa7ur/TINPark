import { Form, redirect, useNavigation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { FormRow, PageTransition } from '../components'
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
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Wrapper>
      <PageTransition>
        <Form method='post' className='form'>
          <h3>Registrarse</h3>
          <FormRow type='text' name='name' labelText='nombre' />
          <FormRow type='text' name='lastName' labelText='Apellidos' />
          <FormRow type='email' name='email' labelText='correo electrónico' />
          <FormRow type='password' name='password' labelText='contraseña' />
          <button
            type='submit'
            className='btn start-btn'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registrando...' : 'Registrarse'}
          </button>
          <p>
            ¿Ya eres miembro?
            <Link to='/login' className='member-btn'>
              Entrar
            </Link>
          </p>
        </Form>
      </PageTransition>
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
`
