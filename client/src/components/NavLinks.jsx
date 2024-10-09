import { useDashboardContext } from '../pages/DashboardLayout'
import { links } from '../utils/constants'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ isSidebar }) => {
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
            onClick={isSidebar ? null : toggleSidebar}
            end
          >
            <span className='icon'>
              <Icon />
            </span>
            {label}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks