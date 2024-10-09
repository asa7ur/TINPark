import styled from 'styled-components'
import { Vehicle, AddVehicle } from '../components'
import { useAllVehiclesContext } from '../pages/AllVehicles'
import { useGlobalContext } from '../context'

const VehiclesContainer = () => {
  const { data } = useAllVehiclesContext()
  const { vehicles } = data

  const { modalType, changeState } = useGlobalContext()

  return (
    <Wrapper>
      <div className='section-center'>
        <h2>Tus Vehículos</h2>
        {vehicles.length === 0 ? (
          <p>No tiene vehículos registrados</p>
        ) : (
          vehicles.map((vehicle) => (
            <Vehicle key={vehicle._id} {...vehicle} brand={vehicle.brand} />
          ))
        )}
        <button onClick={() => changeState('addVehicle')}>
          Añadir Vehiculo
        </button>
      </div>
      {modalType === 'addVehicle' && (
        <AddVehicle onClose={() => changeState(null)} />
      )}
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

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    margin-top: 1rem;
    background: var(--primary-500);
  }
`
