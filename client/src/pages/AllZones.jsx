import { ZonesContainer, NavbarTop, Loading } from '../components'
import { useLoaderData } from 'react-router-dom'
import { useState, useContext, useEffect, createContext } from 'react'
import styled from 'styled-components'
import background from '../assets/Background_3.jpg'

const AllZonesContext = createContext()

const AllZones = () => {
  const { vehicles, zones } = useLoaderData() // Access data from the centralized loader
  const [isLoading, setIsLoading] = useState(true) // State to track loading

  useEffect(() => {
    // Set loading to false after the component mounts
    if (vehicles && zones) {
      setIsLoading(false)
    }
  }, [vehicles, zones])

  return (
    <AllZonesContext.Provider value={{ vehicles, zones }}>
      <Wrapper>
        <Background />
        <NavbarTop />
        {isLoading ? <Loading /> : <ZonesContainer />}
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
