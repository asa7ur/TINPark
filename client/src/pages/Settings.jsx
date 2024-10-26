import styled from 'styled-components'
import {
  NavbarTop,
  SettingsContainer,
  Loading,
  PageTransition,
} from '../components'
import { useNavigation } from 'react-router-dom'
import background from '../assets/Background_4.jpg'

const Settings = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <Wrapper>
      <Background />
      <NavbarTop />
      <PageTransition isLoading={isLoading}>
        <SettingsContainer />
      </PageTransition>
      {isLoading && <Loading />}
    </Wrapper>
  )
}
export default Settings

const Wrapper = styled.div``

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
