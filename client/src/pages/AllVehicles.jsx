import { VehiclesContainer, NavbarTop, Loading, PageTransition } from '../components'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { useState, useContext, createContext } from 'react'
import styled from 'styled-components'
import background from '../assets/Background_2.jpg'

const VehiclesContext = createContext()

const AllVehicles = () => {
  const { vehicles, zones } = useLoaderData()
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  const [addVehicle, setAddVehicle] = useState(false)

  // Function to control modal state
  const toggleAddVehicle = () => {
    setAddVehicle(!addVehicle)
  }

  return (
    <VehiclesContext.Provider
      value={{ vehicles, zones, addVehicle, toggleAddVehicle }}
    >
      <Wrapper>
        <Background />
        <NavbarTop />
        <PageTransition isLoading={isLoading}>
          <VehiclesContainer />
        </PageTransition>
        {isLoading && <Loading />}
      </Wrapper>
    </VehiclesContext.Provider>
  )
}

export const useVehiclesContext = () => useContext(VehiclesContext)

export default AllVehicles

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`
