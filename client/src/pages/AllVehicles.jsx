import { VehiclesContainer, NavbarTop, NavbarBottom } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useState, useContext, createContext } from 'react'
import styled from 'styled-components'
import background from '../assets/Background_1.jpg'

// Loader to fetch vehicle and zone data
export const loader = async () => {
  try {
    // Fetch vehicle data
    const vehicleResponse = await customFetch.get(`/vehicles/`)
    const { vehicles: vehicleData } = vehicleResponse.data

    // Fetch zone data
    const zoneResponse = await customFetch.get('/zones')
    const { zones: zoneData } = zoneResponse.data

    // Return both pieces of data in an object
    return { vehicles: vehicleData, zones: zoneData }
  } catch (error) {
    console.error('Error fetching data:', error)
    return redirect('/dashboard/vehicles')
  }
}

const VehiclesContext = createContext()

const AllVehicles = () => {
  const { vehicles, zones } = useLoaderData()

  const [addVehicle, setAddVehicle] = useState(false)

  // Function to control modal state
  const toggleAddVehicle = () => {
    setAddVehicle(!addVehicle)
  }

  return (
    <VehiclesContext.Provider value={{ vehicles, zones, addVehicle, toggleAddVehicle }}>
      <Wrapper>
        <Background />
        <NavbarTop />
        <VehiclesContainer />
        <NavbarBottom />
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
