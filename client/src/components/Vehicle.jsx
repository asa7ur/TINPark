import styled from 'styled-components'
import { vehicles } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const Vehicle = () => {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/misvehiculos/${id}`)
  }

  return (
    <Wrapper>
      {vehicles.map((vehicle) => {
        const { id, name, plate, parked, icon, alt_name } = vehicle
        return (
          <div key={id} className='info' onClick={()=> handleClick(id)}>
            <div className='text'>
              <h4>{name}</h4>
              <h5>Matrícula: {plate}</h5>
              <p>
                {parked ? 'En ' : 'Fuera'}
                {parked && <span className='highlighted'>{parked}</span>}
              </p>
            </div>
            <div className='icon'>
              <img src={icon} alt={alt_name} className='img' />
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}
export default Vehicle

const Wrapper = styled.div`
  .info {
    margin-top: 2rem;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 25px;
    border: var(--border);
    background: var(--backgroundColorAlt);
    box-shadow: var(--shadow-4);
    cursor: pointer;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  h5 {
    margin-bottom: 0.25rem;
    font-weight: 400;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .icon {
    width: 75px;
    height: 75px;
  }
`
