import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

const Principal = () => {
  return (
    <Wrapper>
      <div className='content'>
        <img src={logo} className='logo' alt='TINPark Logo' />
        <div className='info'>
          <h1>TINPark</h1>
          <h4>
            Control de acceso y ocupación de parking por identificación de
            matrículas
          </h4>
          <div className='buttons'>
            <Link to='/registrarse'>
              <button className='button'>Registrarse</button>
            </Link>
            <Link to='/login'>
              <button className='button'>Entrar</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Principal

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundColor);
  color: var(--textColor);
  padding: 1rem;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--backgroundColorAlt);
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
    color: var(--primary-500);
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: var(--grey-300);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .button {
    font-size: 1rem;
    width: 100%;
    padding: var(--padding);
    border-radius: var(--radius);
    background: var(--primary-600);
    color: var(--grey-50);
    border: none;
    cursor: pointer;
    transition: var(--transition);
  }

  .button:hover {
    background: var(--primary-400);
    box-shadow: var(--shadow-2);
  }
`
