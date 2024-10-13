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
  const parkedVehicleNames = parkedVehicles.map(
    (vehicleId) => vehicleMap[vehicleId]
  )

  return (
    <Wrapper>
      <div className='info' key={_id}>
        <div className='text'>
          <h4>{name}</h4>
          <h5>
            {parkedVehicleNames.length > 0 ? (
              <span className='highlighted'>
                {parkedVehicleNames.join(', ')}
              </span>
            ) : (
              'Ningún vehículo'
            )}{' '}
            está aparcado aquí
          </h5>
          <p>
            Hay <span className='highlighted'>{freeSpaces}</span> espacios
            libres
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
  .info {
    width: 90vw;
    max-width: var(--max-width);
    margin-top: 1.5rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: var(--border);
    background: var(--backgroundColor);
    color: var(--textColor);
    box-shadow: var(--shadow-4);
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

  .map {
    padding-top: 0.5rem;
  }
`
