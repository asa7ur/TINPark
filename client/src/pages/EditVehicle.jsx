import styled from 'styled-components'
import { useLoaderData, redirect } from 'react-router-dom'
import { useState, useEffect, createContext, useContext } from 'react'
import { CarOptions, EditVehicleContainer } from '../components'
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

  const [selectedZone, setSelectedZone] = useState(vehicle?.parked || null)
  const [modalType, setModalType] = useState(null)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  // Handle resizing of viewport
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Function to handle modal change
  const handleModalChange = (type = null) => {
    setModalType(type)
  }

  const options = vehicle.parked ? inside : outside

  return (
    <EditVehicleContext.Provider
      value={{
        vehicle,
        selectedZone,
        setSelectedZone,
        modalType,
        handleModalChange,
        viewportHeight,
      }}
    >
      <Wrapper>
        <Background />
        <EditVehicleContainer />
        <CarOptions options={options} />
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