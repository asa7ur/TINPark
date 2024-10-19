import { ZonesContainer, NavbarTop, Loading, PageTransition } from '../components'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { useContext, createContext } from 'react'
import styled from 'styled-components'
import background from '../assets/Background_3.jpg'

const AllZonesContext = createContext()

const AllZones = () => {
  const { vehicles, zones } = useLoaderData()
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <AllZonesContext.Provider value={{ vehicles, zones }}>
      <Wrapper>
        <Background />
        <NavbarTop />
        <PageTransition isLoading={isLoading}>
          <ZonesContainer />
        </PageTransition>
        {isLoading && <Loading />}
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
