import styled from 'styled-components'
import { useLoaderData, redirect } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import { EditOptions, EditVehicleContainer, VehicleState } from '../components'
import { inside, outside } from '../utils/constants'
import customFetch from '../utils/customFetch'
import background from '../assets/Background_3.jpg'

// Loader to fetch vehicle data
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/vehicles/${params.id}`)
    return data
  } catch (error) {
    console.error('Error fetching vehicle:', error)
    return redirect('/dashboard/vehicles')
  }
}

// Create a context for EditVehicle
const EditVehicleContext = createContext()

const EditVehicle = () => {
  const { vehicle } = useLoaderData()

  // Add state for managing modal visibility
  const [showVehicleState, setShowVehicleState] = useState(false)

  // Function to control modal state
  const toggleVehicleState = () => {
    setShowVehicleState(!showVehicleState)
  }

  const options = vehicle.parked ? inside : outside

  return (
    <EditVehicleContext.Provider value={{ vehicle, showVehicleState, toggleVehicleState }}>
      <Wrapper>
        <Background />
        <EditVehicleContainer />
        <EditOptions options={options} />
        <VehicleState/>
      </Wrapper>
    </EditVehicleContext.Provider>
  )
}

export const useEditVehicleContext = () => useContext(EditVehicleContext)

export default EditVehicle

const Wrapper = styled.main`
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
