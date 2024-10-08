import styled from 'styled-components'
import { NavbarTop, Zone, NavbarBottom } from '../components'
import background from '../assets/Background_2.jpg'
import { useGlobalContext } from '../context'

const Zones = () => {
  const { viewportHeight } = useGlobalContext()

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <NavbarTop />
      <div className='section-center'>
        <h2>Zonas disponibles</h2>
        <Zone />
      </div>
      <NavbarBottom/>
    </Wrapper>
  )
}

export default Zones

const Wrapper = styled.main`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h2 {
    padding-top: 1rem;
    align-self: flex-start;
  }
`