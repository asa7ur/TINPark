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
          const { id, icon, url, label } = link
          return (
            <NavLink to={url} className='nav-button' key={id} end>
              <Button url={url} icon={icon} showLabel={true} label={label} />
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default NavbarBottom

const Wrapper = styled.nav`
  border-top: var(--border);
  position: sticky;
  bottom: 0;
  z-index: 1000;
  background-color: #030712;

  .navbar {
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
