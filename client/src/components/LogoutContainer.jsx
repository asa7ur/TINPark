import styled from 'styled-components'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import { useState, useRef, useEffect } from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user, logoutUser } = useDashboardContext()

  const logoutRef = useRef(null)

  const handleClickOutside = (event) => {
    if (logoutRef.current && !logoutRef.current.contains(event.target)) {
      setShowLogout(false) // close dropdown when clicking outside
    }
  }

  useEffect(() => {
    if (showLogout) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showLogout])

  return (
    <Wrapper>
      <button className='logout-btn' onClick={() => setShowLogout(!showLogout)}>
        <FaUserCircle className='avatar' />
        <h5>{user.name}</h5>
        <FaCaretDown />
      </button>

      <button
        ref={logoutRef}
        className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}
        onClick={logoutUser}
      >
        <BiLogOutCircle className='avatar' />
        <h5>Salir</h5>
      </button>
    </Wrapper>
  )
}

export default LogoutContainer

const Wrapper = styled.div`
  position: relative;

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backgroundColorAlt);
    color: var(--textColorAlt);
    padding: 0.5rem 0.75rem;
    border: var(--border);
    border-radius: 50px;
    gap: 5px;
    width: 100%;
  }

  .avatar {
    font-size: 1.2rem;
  }

  h5 {
    text-transform: uppercase;
  }

  .dropdown {
    position: absolute;
    top: 2.5rem;
    right: 0;
    width: 100%;
    background: var(--backgroundColorAlt);
    color: var(--textColorAlt);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    padding: 0.5rem 0.75rem;
    border: var(--border);
    border-radius: 50px;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: visibility 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
  }

  .show-dropdown {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`
