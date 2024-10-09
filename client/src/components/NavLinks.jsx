import { useDashboardContext } from '../pages/DashboardLayout'
import { links } from '../utils/constants'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ isSidebar, onLinkClick }) => {
  const { toggleSidebar } = useDashboardContext()

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { label, url, icon: Icon } = link
        return (
          <NavLink
            to={url}
            key={label}
            className='nav-link'
            onClick={() => {
              if (isSidebar) {
                toggleSidebar()
              }
              if (onLinkClick) {
                onLinkClick()
              }
            }}
            end
          >
            <span className='icon'>
              <Icon />
            </span>
            <span className='label'>{label}</span>
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
