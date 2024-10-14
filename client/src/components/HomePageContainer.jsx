import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDashboardContext } from '../pages/DashboardLayout'
import { useHomePageContext } from '../pages/HomePage'
import { HomePageVehicles } from '.'
import { HomePageZones } from '.'
import { HomeVehicles } from '../utils/constants'

const HomePageContainer = () => {
  const { vehicles, zones } = useHomePageContext()
  const { user } = useDashboardContext()

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
      <h2>Bienvenido, {user.name}!</h2>
      <section className='vehicles'>
        <div className='title'>
          <h4>Tus Vehículos</h4>
          <NavLink to='/dashboard/vehicles'>
            <button className='nav-btn'>Ver todos</button>
          </NavLink>
        </div>

        <div className='vehicle-list'>
          {selectedVehicles.map((vehicle, index) => (
            <HomePageVehicles
              key={vehicle._id}
              {...vehicle}
              icon={vehicleIcons[index]?.icon}
            />
          ))}
        </div>
      </section>

      <section className='zones'>
        <div className='title'>
          <h4>Tus Zonas</h4>
          <NavLink to='/dashboard/zones'>
            <button className='nav-btn'>Ver todos</button>
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

  h2 {
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

  .vehicle-list > div {
    &:nth-child(odd) {
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

  .zones{
    margin-top: 1rem;
  }

  .zone-list {
    width: 90vw;
    margin: 0 auto;
  }
`
