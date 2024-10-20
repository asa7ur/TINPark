import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useHomePageContext } from '../pages/HomePage'
import { HomePageVehicles, HomePageZones, Greeting } from '.'
import { HomeVehicles } from '../utils/constants'

const HomePageContainer = () => {
  const { vehicles, zones, toggleAddVehicle } = useHomePageContext()

  const vehicleIcons = Object.values(HomeVehicles)

  // Filter parked vehicles
  const parkedVehicles = vehicles.filter((vehicle) => vehicle.parked)

  // If there are fewer than two parked vehicles, include unparked ones to reach a total of 2
  const selectedVehicles = [
    ...parkedVehicles,
    ...vehicles.filter((vehicle) => !vehicle.parked),
  ].slice(0, 2)

  const selectedZones = [...zones.slice(0, 1)]

  return (
    <Wrapper>
      <Greeting />
      <hr />
      <section className='vehicles'>
        <div className='title'>
          <h4>Tus Vehículos</h4>
          {vehicles.length > 0 && (
            <NavLink to='/dashboard/vehicles'>
              <button className='nav-btn'>Ver todos</button>
            </NavLink>
          )}
        </div>

        {vehicles.length === 0 ? (
          <div className='no-vehicles'>
            <h3>No tienes vehículos registrados</h3>
          </div>
        ) : (
          <div className='vehicle-list'>
            {selectedVehicles.map((vehicle, index) => (
              <HomePageVehicles
                key={vehicle._id}
                {...vehicle}
                icon={vehicleIcons[index]?.icon}
              />
            ))}
          </div>
        )}
      </section>

      <section className='zones'>
        <div className='title'>
          <h4>Tus Zonas</h4>
          <NavLink to='/dashboard/zones'>
            <button className='nav-btn'>Ver todas</button>
          </NavLink>
        </div>

        <div className='zone-list'>
          {selectedZones.map((zone) => (
            <HomePageZones key={zone._id} {...zone} />
          ))}
        </div>
      </section>
    </Wrapper>
  )
}

export default HomePageContainer

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    width: 90vw;
    margin: 0 auto;
    padding: 0.5rem 0;
    align-self: flex-start;
  }

  .title {
    width: 90vw;
    margin: 0 auto;
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-btn {
    background: none;
    border: none;
    color: var(--textColorHighlighted);
  }

  .no-vehicles {
    text-align: center;
    margin-top: 1rem;
  }

  .vehicle-list > div {
    &:nth-child(odd) {
      svg {
        position: absolute;
        color: rgba(255, 255, 255, 0.5);
        top: 1rem;
        right: 1rem;
        font-size: 2.5rem;
        padding: 5px;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 25%;
        cursor: pointer;
      }

      .info {
        margin-right: auto;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .image {
        display: flex;
        justify-content: flex-start;
      }
    }
  }

  .vehicle-list > div {
    &:nth-child(even) {
      svg {
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: rgba(255, 255, 255, 0.5);
        font-size: 2.5rem;
        padding: 5px;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 25%;
        cursor: pointer;
      }

      .info {
        margin-left: auto;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .image {
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  .zones {
    margin-top: 1rem;
  }

  .zone-list {
    width: 90vw;
    margin: 0 auto;
  }
`
