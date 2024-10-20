import styled from 'styled-components'
import { Link, useRouteError, useNavigation } from 'react-router-dom'
import { Loading, PageTransition } from '../components'
import background from '../assets/Background_4.jpg'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <Wrapper>
      <Background />
      <PageTransition isLoading={isLoading}>
        <div className='section-center'>
          <h2>Página no encontrada</h2>
          <Link to='/dashboard/homepage'>
            <button className='action-btn'>Volver</button>
          </Link>
        </div>
      </PageTransition>
      {isLoading && <Loading />}
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 1.2rem;
  }
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`