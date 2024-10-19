import { HomePageContainer, NavbarTop } from '../components'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'
import styled from 'styled-components'
import background from '../assets/Background_1.jpg'

const HomePageContext = createContext()

const HomePage = () => {
  // Access data from the centralized loader
  const { vehicles, zones } = useLoaderData()

  return (
    <HomePageContext.Provider value={{ vehicles, zones }}>
      <Wrapper>
        <Background />
        <NavbarTop />
        <HomePageContainer />
        {/* <NavbarBottom /> */}
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
  z-index: -1;
`
