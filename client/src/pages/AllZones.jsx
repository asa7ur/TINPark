import { ZonesContainer, NavbarTop, NavbarBottom } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import background from '../assets/Background_2.jpg'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/zones')
    return { data }
  } catch (error) {
    return error
  }
}

const AllZonesContext = createContext()

const AllZones = () => {
  const { data } = useLoaderData()
  const { viewportHeight } = useGlobalContext()

  return (
    <AllZonesContext.Provider value={{ data }}>
      <Wrapper style={{ height: `${viewportHeight}px` }}>
        <Background />
        <NavbarTop />
        <ZonesContainer />
        <NavbarBottom />
      </Wrapper>
    </AllZonesContext.Provider>
  )
}

export const useAllZonesContext = () => useContext(AllZonesContext)

export default AllZones

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
