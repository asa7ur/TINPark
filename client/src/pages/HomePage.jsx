import { HomePageContainer, NavbarTop, NavbarBottom } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'
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

const HomePageContext = createContext()

const HomePage = () => {
  const { vehicles, zones } = useLoaderData()

  return (
    <HomePageContext.Provider value={{ vehicles, zones }}>
      <Wrapper>
        <Background />
        <NavbarTop />
        <HomePageContainer />
        <NavbarBottom />
      </Wrapper>
    </HomePageContext.Provider>
  )
}

export const useHomePageContext = () => useContext(HomePageContext)

export default HomePage

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
  background-attachment: fixed;
  z-index: -1;
`
