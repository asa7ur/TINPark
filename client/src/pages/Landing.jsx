import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageTransition } from '../components'
import logo from '../assets/Logo.png'

const Landing = () => {
  return (
    <Wrapper>
      <PageTransition isLoading={false}>
        <div className='content'>
          <img src={logo} className='logo' alt='TINPark Logo' />
          <div className='info'>
            <h1>TINPark</h1>
            <h4>
              Control de acceso y ocupación de parking por identificación de
              matrículas
            </h4>
            <div className='buttons'>
              <Link to='/register'>
                <button className='btn start-btn'>Registrarse</button>
              </Link>
              <Link to='/login'>
                <button className='btn start-btn'>Entrar</button>
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    </Wrapper>
  )
}

export default Landing

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundColorAltAlt);
  color: var(--textColor);
  padding: 1rem;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--backgroundColor);
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-4);
    width: 100%;
    text-align: center;
  }

  .logo {
    width: 150px;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1rem;
  }
`
