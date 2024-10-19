import styled from 'styled-components'
import { Vehicle, AddVehicle } from '../components'
import { useVehiclesContext } from '../pages/AllVehicles'

const VehiclesContainer = () => {
  const { vehicles, toggleAddVehicle } = useVehiclesContext()

  return (
    <Wrapper>
      <div className='section-center'>
        <h2>Tus Vehículos</h2>
        {vehicles.length === 0 ? (
          <h3 className='empty'>No tiene vehículos registrados</h3>
        ) : (
          vehicles.map((vehicle) => (
            <Vehicle key={vehicle._id} {...vehicle} brand={vehicle.brand} />
          ))
        )}
        <button className='action-btn' onClick={toggleAddVehicle}>Añadir Vehiculo</button>
      </div>
      <AddVehicle/>
    </Wrapper>
  )
}

export default VehiclesContainer

const Wrapper = styled.main`
position: ;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    padding-top: 1rem;
    align-self: flex-start;
  }

  .empty {
    text-align: center;
    margin-top: 1rem; 
  }

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    margin-top: 1rem;
  }
`
