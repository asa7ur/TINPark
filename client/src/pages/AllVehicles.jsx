import { VehiclesContainer, NavbarTop, NavbarBottom } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'
import styled from 'styled-components'
import background from '../assets/Background_1.jpg'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/vehicles')
    return { data }
  } catch (error) {
    return error
  }
}

const VehiclesContext = createContext()

const AllVehicles = () => {
  const { data } = useLoaderData()

  return (
    <VehiclesContext.Provider value={{ data }}>
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
