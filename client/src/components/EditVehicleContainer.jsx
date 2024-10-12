import styled from 'styled-components'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useEditVehicleContext } from '../pages/EditVehicle'
import { VEHICLE_BRAND } from '../utils/constants'

const EditVehicleContainer = () => {
  const { vehicle, zones } = useEditVehicleContext()
  const navigate = useNavigate()

  const { name, plate, brand, parked } = vehicle
  
  const parkedZone = zones.find((zone) => zone._id === parked)
  const parkedZoneName = parkedZone ? parkedZone.name : 'Fuera'

  const vehicleLogo =
    VEHICLE_BRAND[brand.replace(/\s+/g, '_').toUpperCase()]?.icon ||
    VEHICLE_BRAND.POR_DEFECTO.icon

  return (
    <Wrapper>
      <div className='section-center'>
        <div className='return' onClick={() => navigate('/dashboard/vehicles')}>
          <FaLongArrowAltLeft />
          <p>Volver</p>
        </div>
        <div className='vehicle-info'>
          <div className='icon'>
            <img src={vehicleLogo} alt={name} className='img' />
          </div>
          <h1>{name}</h1>
          <h3>Matrícula: {plate}</h3>
          <h4>{parked ? `En ${parkedZoneName}` : 'Fuera'}</h4>
        </div>
      </div>
    </Wrapper>
  )
}

export default EditVehicleContainer

const Wrapper = styled.main`
  color: var(--textColor);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;

  .return {
    cursor: pointer;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.5rem;
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  .vehicle-info {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;

    .icon {
      width: 150px;
      min-height: 125px;
      height: auto;
      display: flex;
      align-items: center;
      text-align: center;
    }

    h1 {
      margin: 0.5rem 0;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    h4 {
      margin-bottom: 0.25rem;
      font-weight: 400;
      text-transform: none;
    }
  }
`
