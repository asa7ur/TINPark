import styled from 'styled-components'
import { NavbarTop, Zone, NavbarBottom } from '../components'
import { useGlobalContext } from '../context'

const Zonas = () => {
  const { viewportHeight } = useGlobalContext()

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <NavbarTop />
      <div className='section-center'>
        <h2>Zonas disponibles</h2>
        <Zone />
      </div>
      <NavbarBottom />
    </Wrapper>
  )
}

export default Zonas

const Wrapper = styled.main`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  h2 {
    padding-top: 1rem;
  }
`