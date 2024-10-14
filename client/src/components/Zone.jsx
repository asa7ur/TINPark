import styled from 'styled-components'
import { useAllZonesContext } from '../pages/AllZones'

const Zone = ({ _id, name, freeSpaces, map, parkedVehicles }) => {
  // Access vehicles from context
  const { vehicles } = useAllZonesContext()

  // Create a map of vehicle IDs to vehicle names
  const vehicleMap = vehicles.reduce((acc, vehicle) => {
    acc[vehicle._id] = vehicle.name
    return acc
  }, {})

  // Map parked vehicle IDs to their corresponding names
  const parkedVehicleNames = parkedVehicles
    .map((vehicleId) => vehicleMap[vehicleId])
    .filter(Boolean)

  return (
    <Wrapper>
      <div className='info' key={_id}>
        <div className='text'>
          <h4>{name}</h4>
          <h5>
            Vehículos aquí: {' '}
            {parkedVehicleNames.length > 0 ? (
              <span className='highlighted'>
                {parkedVehicleNames.join(', ')}
              </span>
            ) : (
              'Ninguno'
            )}
          </h5>
          <p>
            Espacios libres: <span className='highlighted'>{freeSpaces}</span>
          </p>
        </div>
        <div className='map'>
          <iframe
            src={map}
            width='100%'
            height='150'
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </Wrapper>
  )
}

export default Zone

const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  max-width: var(--max-width);
  margin-top: 1.5rem;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: var(--shadow-4);

  .info {
    position: relative;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
  }

  .map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .text {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: var(--backgroundColor);
    color: var(--textColor);
    padding: 1rem;
    z-index: 0;
  }

  h4,
  h5,
  p {
    margin: 0;
    color: white;
  }

  h4 {
    margin-bottom: 0.5rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  h5 {
    margin-bottom: 0.25rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    text-transform: none;
  }

  p {
    font-size: 0.875rem;
  }

  .highlighted {
    font-weight: bold;
    color: var(--textColorHighlighted);
  }

  iframe {
    border: none;
  }
`