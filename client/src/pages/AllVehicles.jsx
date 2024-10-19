import { VehiclesContainer, NavbarTop } from '../components'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect, useContext, createContext } from 'react'
import { Loading } from '../components'
import styled from 'styled-components'
import background from '../assets/Background_2.jpg'

const VehiclesContext = createContext()

const AllVehicles = () => {
  const { vehicles, zones } = useLoaderData()
  const [isLoading, setIsLoading] = useState(true) // State to track loading
  const [addVehicle, setAddVehicle] = useState(false)

  useEffect(() => {
    // Set loading to false after the component mounts
    if (vehicles && zones) {
      setIsLoading(false)
    }
  }, [vehicles, zones])

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
        {isLoading ? <Loading /> : <VehiclesContainer />}
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
