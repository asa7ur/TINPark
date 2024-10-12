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

export const action = async ({ request, params }) => {
  const formData = await request.formData()
  const updatedZone = formData.get('vehicleState')

  try {
    console.log('Updating vehicle state to:', updatedZone)
    await customFetch.patch(`/vehicles/${params.id}`, { parked: updatedZone })
    return redirect(`/dashboard/vehicles/${params.id}`)
  } catch (error) {
    console.error('Error updating vehicle:', error)
    return { error: error.message }
  }
}

// Create a context for EditVehicle
const EditVehicleContext = createContext()

const EditVehicle = () => {
  const { vehicle } = useLoaderData()

  const options = vehicle.parked ? inside : outside

  // Add state for managing modal visibility
  const [showVehicleState, setShowVehicleState] = useState(false)
  const [selectZone, setSelectZone] = useState(
    vehicle.parked ? vehicle.parked : 'Fuera'
  )

  const handleZoneChange = (e) => {
    console.log("Selected Zone: ", e.target.value);
    setSelectZone(e.target.value)
  }

  // Function to control modal state
  const toggleVehicleState = () => {
    setShowVehicleState(!showVehicleState)
  }

  return (
    <EditVehicleContext.Provider
      value={{
        vehicle,
        showVehicleState,
        toggleVehicleState,
        selectZone,
        handleZoneChange,
        options,
      }}
    >
      <Wrapper>
        <Background />
        <EditVehicleContainer />
        <EditOptions />
        <VehicleState />
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
