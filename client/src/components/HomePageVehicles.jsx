import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useHomePageContext } from '../pages/HomePage'

const HomePageVehicles = ({ _id, name, plate, parked, icon }) => {
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
    width: 80vw;
    margin-top: 1.5rem;
    background: var(--backgroundColor);
    color: var(--textColor);
    box-shadow: var(--shadow-4);
  }

  .text {
    max-width: var(--max-width);
    padding: 1rem;
  }

  h3 {
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

  .img {
    width: 200px;
    max-width: 100%;
    max-height: 100%;
  }

  &:nth-child(even) .info {
    margin-right: auto;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  &:nth-child(even) .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &:nth-child(even) .image {
    display: flex;
    justify-content: flex-start;
  }

  &:nth-child(odd) .info {
    margin-left: auto;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  &:nth-child(odd) .text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &:nth-child(odd) .image {
    display: flex;
    justify-content: flex-end;
  }
`
