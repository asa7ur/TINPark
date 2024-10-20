import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Vehicle, AddVehicle } from '../components'
import { useVehiclesContext } from '../pages/AllVehicles'

const VehiclesContainer = () => {
  const { vehicles, toggleAddVehicle } = useVehiclesContext()
  const navigate = useNavigate()

  return (
    <Wrapper>
      <div className='section-center'>
        <div className='return-btn' onClick={() => navigate('/dashboard/homepage')}>
          <FaLongArrowAltLeft />
          <p>Volver</p>
        </div>
        <h2>Tus Vehículos</h2>
        {vehicles.length === 0 ? (
          <h3 className='empty'>No tienes vehículos registrados</h3>
        ) : (
          vehicles.map((vehicle) => (
            <Vehicle key={vehicle._id} {...vehicle} brand={vehicle.brand} />
          ))
        )}
        <button className='btn action-btn' onClick={toggleAddVehicle}>
          Añadir Vehiculo
        </button>
      </div>
      <AddVehicle />
    </Wrapper>
  )
}

export default VehiclesContainer

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    padding-top: 1rem;
    align-self: flex-start;
  }

  .empty {
    text-align: center;
    margin-top: 60%;
  }
`
