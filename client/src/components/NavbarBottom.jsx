import styled from 'styled-components'
import { links } from '../utils/constants'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const NavbarBottom = () => {
  const navbarLinks = links.filter((link) => link.id > 1 && link.id < 5)

  return (
    <Wrapper>
      <div className='navbar'>
        {navbarLinks.map((link) => {
          const { id, icon, url } = link
          return (
            <NavLink to={url} className='nav-button' key={id} end>
              <Button url={url} icon={icon} />
            </NavLink>
          )
        })}
      </div>
      <div className='overlay' />
    </Wrapper>
  )
}

export default NavbarBottom

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%; 
  background: black;
  display: flex;
  justify-content: center;
  
  .navbar {
    width: 100%;
    color: var(--textColor);
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
  }
`
