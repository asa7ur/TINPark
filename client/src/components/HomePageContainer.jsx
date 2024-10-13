import styled from 'styled-components'
import { useDashboardContext } from '../pages/DashboardLayout'
import { useHomePageContext } from '../pages/HomePage'
import { HomePageVehicles } from '.'
import { HomeVehicles } from '../utils/constants'

const HomePageContainer = () => {
  const { vehicles } = useHomePageContext()
  const { user } = useDashboardContext()

  const vehicleIcons = Object.values(HomeVehicles)

  // Filter parked vehicles
  const parkedVehicles = vehicles.filter((vehicle) => vehicle.parked)

  // If there are fewer than two parked vehicles, include unparked ones to reach a total of 2
  const selectedVehicles = [
    ...parkedVehicles,
    ...vehicles.filter((vehicle) => !vehicle.parked),
  ].slice(0, 2)

  return (
    <Wrapper>
      <h2>Bienvenido, {user.name}!</h2>
      {selectedVehicles.map((vehicle, index) => (
        <HomePageVehicles
          key={vehicle._id}
          {...vehicle}
          icon={vehicleIcons[index]?.icon}
        />
      ))}
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
    padding-top: 1rem;
    align-self: flex-start;
  }
`
