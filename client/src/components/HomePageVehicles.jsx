import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useHomePageContext } from '../pages/HomePage'
import { CiEdit } from 'react-icons/ci'

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
      <div key={_id} className='info'>
        <CiEdit onClick={handleClick} />
        <div className='text'>
          <h5>{name}</h5>
          <h4>
            {parked ? 'En ' : 'Fuera'}
            {parked && <span className='highlighted'>{parkedZoneName}</span>}
          </h4>
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

  h4 {
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
