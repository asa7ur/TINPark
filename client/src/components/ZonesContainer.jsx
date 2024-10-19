import styled from 'styled-components'
import { Zone } from '../components'
import { useAllZonesContext } from '../pages/AllZones'

const ZonesContainer = () => {
  const { zones } = useAllZonesContext()

  return (
    <Wrapper>
      <div className='section-center'>
        <h2>Zonas Disponibles</h2>
        {zones.length === 0 ? (
          <p>No tiene zonas disponibles</p>
        ) : (
          zones.map((zone) => (
            <Zone key={zone._id} {...zone}/>
          ))
        )}
      </div>
    </Wrapper>
  )
}

export default ZonesContainer

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    padding-top: 1rem;
    align-self: flex-start;
  }

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    margin-top: 1rem;
  }
`
