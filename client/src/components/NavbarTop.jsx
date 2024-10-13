import styled from 'styled-components'
import { links } from '../utils/constants'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useDashboardContext } from '../pages/DashboardLayout'

const NavbarTop = () => {
  const userLink = links.find((link) => link.id === 1)
  const { user, toggleSidebar } = useDashboardContext()

  return (
    <Wrapper>
      <div className='navbar-top'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className='user'>
          <div className='image'>
            {userLink && (
              <NavLink
                to={userLink.url}
                className='nav-button user-btn'
                key={userLink.id}
                end
              >
                <Button url={userLink.url} icon={userLink.icon} />
              </NavLink>
            )}
          </div>
          <div className='text'>
            <h5>{user.name}</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default NavbarTop

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0) 100%
  );
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

  .styled-circle {
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
  }
  .toggle-btn {
    background: none;
    border: none;
    color: var(--textColor);
    cursor: pointer;
    padding: 0;
    font-size: 1.5rem;
  }
`
