import styled from 'styled-components'
import { NavbarTop, Vehicle, AddVehicle } from '../components'
import { useGlobalContext } from '../context'

const Vehicles = () => {
  const { viewportHeight, modalType, changeState, vehicles } =
    useGlobalContext()

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <NavbarTop />
      <div className='section-center'>
        <h2>Tus Vehículos</h2>
        {vehicles.length === 0 ? (
          <p>No tiene vehículos registrados</p>
        ) : (
          vehicles.map((vehicle) => (
            <Vehicle key={vehicle._id} {...vehicle} />
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

export default Vehicles

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

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
