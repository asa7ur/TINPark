import styled from 'styled-components'
import { links } from '../utils/constants'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const NavbarBottom = () => {
  const navbarLinks = links.filter((link) => link.id > 2)

  return (
    <Wrapper>
      {navbarLinks.map((link) => {
        const { id, icon, url } = link
        return (
          <NavLink to={url} className='nav-button' key={id} end>
            <Button url={url} icon={icon} />
          </NavLink>
        )
      })}
    </Wrapper>
  )
}

export default NavbarBottom

const Wrapper = styled.div`
  position: sticky;
  margin: 0 auto;
  bottom: 1rem;
  z-index: 1000;
  width: 150px;
  background: var(--backgroundColor);
  color: var(--textColor);
  padding: 0.75rem 1.5rem;
  border: var(--border);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
