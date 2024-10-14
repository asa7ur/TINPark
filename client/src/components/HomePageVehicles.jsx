import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useHomePageContext } from '../pages/HomePage'

const HomePageVehicles = ({ _id, name, parked, icon }) => {
  const { zones } = useHomePageContext()
  const navigate = useNavigate()

  const parkedZone = zones.find((zone) => zone._id === parked)
  const parkedZoneName = parkedZone ? parkedZone.name : 'Fuera'

  const handleClick = () => {
    navigate(`/dashboard/vehicles/${_id}`)
  }

  return (
    <Wrapper>
      <div key={_id} className='info' onClick={handleClick}>
        <div className='text'>
          <h5>{name}</h5>
          <h3>
            {parked ? 'En ' : 'Fuera'}
            {parked && <span className='highlighted'>{parkedZoneName}</span>}
          </h3>
        </div>
        <div className='image'>
          <img src={icon} className='img' alt={name} />
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePageVehicles

const Wrapper = styled.div`
  /* Targeting the vehicle items within the .vehicle-list */
  .info {
    position: relative;
    width: 80vw;
    margin-top: 1rem;
    background: var(--backgroundColor);
    color: var(--textColor);
    box-shadow: var(--shadow-4);
  }

  .text {
    max-width: var(--max-width);
    padding: 1rem;
  }

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  h5 {
    margin-bottom: 0.25rem;
    font-weight: 400;
  }

  .img {
    width: 200px;
    max-width: 100%;
    max-height: 100%;
  }
`
