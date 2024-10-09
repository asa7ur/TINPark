import styled from 'styled-components'
import { links } from '../utils/constants'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const NavbarBottom = () => {
  const navbarLinks = links.filter((link) => link.id > 1)

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
  position: sticky;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  
  .navbar {
    position: sticky;
    width: auto; 
    background: var(--backgroundColor);
    color: var(--textColor);
    padding: 0.75rem 1.5rem;
    border: var(--border);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 99;
  }

  .overlay {
    position: fixed; 
    bottom: 0;
    left: 0; 
    right: 0; 
    height: 5rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 30%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 98; 
  }
`
