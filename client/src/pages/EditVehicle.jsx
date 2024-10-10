import styled from 'styled-components'
import { useEffect, createContext, useContext } from 'react'
import { useLoaderData, redirect } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { CarState, CarOptions, EditVehicleContainer } from '../components'
import { inside, outside } from '../utils/constants'
import customFetch from '../utils/customFetch'
import background from '../assets/Background_3.jpg'

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/vehicles/${params.id}`)
    return data
  } catch (error) {
    console.error('Error fetching vehicle:', error)
    return redirect('/dashboard/vehicles')
  }
}

const EditVehicleContext = createContext()

const EditVehicle = () => {
  const {vehicle} = useLoaderData()
  const { viewportHeight, modalType, changeState, selectZone } =
    useGlobalContext()

  useEffect(() => {
    if (vehicle?.parked) {
      selectZone(vehicle.parked)
    }
  }, [vehicle, selectZone])

  const options = vehicle.parked ? inside : outside

  return (
    <EditVehicleContext.Provider value={{ vehicle }}>
      <Wrapper style={{ height: `${viewportHeight}px` }}>
        <Background />
        <EditVehicleContainer />
        <CarOptions options={options} />
        {modalType === 'carState' && (
          <CarState onClose={() => changeState(null)} />
        )}
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
