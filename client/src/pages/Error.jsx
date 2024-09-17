import styled from 'styled-components'
import { Link, useRouteError } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { NavbarBottom } from '../components'

const Error = () => {
  const { viewportHeight } = useGlobalContext()
  const error = useRouteError()
  console.log(error)

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <div className='section-center'>
        <h2>Página no encontrada</h2>
        <Link to='/misvehiculos'>
          <button className='button'>Volver</button>
        </Link>
      </div>
      <NavbarBottom />
    </Wrapper>
  )
}
export default Error

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .section-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-bottom: 1rem;
  }
`
