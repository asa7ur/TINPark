import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { LogoutContainer } from '.'
import { useDashboardContext } from '../pages/DashboardLayout'

const NavbarTop = () => {
  const { toggleSidebar } = useDashboardContext()

  return (
    <Wrapper>
      <div className='navbar-top'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaBars />
        </button>
        <LogoutContainer/>
      </div>
    </Wrapper>
  )
}
export default NavbarTop

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  background: black;
  color: var(--textColor);

  .navbar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    flex-grow: 1;
    padding: 1rem 0;
  }

  .icon {
    font-size: 1.5rem;
  }

  .toggle-btn {
    background: none;
    border: none;
    color: var(--textColor);
    cursor: pointer;
    padding: 0;
    font-size: 1.5rem;
  }
  
  /* .styled-circle {
    width: 50px;
    height: 50px;
  }

  h5 {
    text-transform: uppercase;
  }

  .user {
    background: var(--backgroundColorAlt);
    color: var(--textColorAlt);
    padding: 0.75rem 1rem;
    border: var(--border);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  } */
  
`
