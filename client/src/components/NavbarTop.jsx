import styled from 'styled-components'
import { links } from '../utils/constants'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const NavbarTop = () => {
  const userLink = links.find((link) => link.id === 1)
  const sidebarLink = links.find((link) => link.id === 2)

  return (
    <Wrapper>
      
      <div className='navbar-top'>
        {sidebarLink && (
          <NavLink
            to={sidebarLink.url}
            className='nav-button'
            key={sidebarLink.id}
            end
          >
            <Button url={sidebarLink.url} icon={sidebarLink.icon} />
          </NavLink>
        )}
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
            <h5>Garik</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default NavbarTop

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(180deg, var(--primary-900) 0%, #0b4567 100%);
  color: var(--textColor);

  .navbar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    flex-grow: 1;
    padding: 0.5rem 0;
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
`
