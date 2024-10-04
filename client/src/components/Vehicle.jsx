import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Vehicle = ({ _id, name, plate, parked, icon, alt_name }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/dashboard/vehicles/${_id}`)
  }

  return (
    <Wrapper>
      <div key={_id} className='info' onClick={handleClick}>
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
    </Wrapper>
  )
}

export default Vehicle

const Wrapper = styled.div`
  .info {
    width: 90vw;
    max-width: var(--max-width);
    margin-top: 1.5rem;
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
