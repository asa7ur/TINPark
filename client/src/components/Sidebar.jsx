import styled from 'styled-components'
import NavLinks from './NavLinks'
import User from '../assets/User.png'
import { useDashboardContext } from '../pages/DashboardLayout'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext()
  const sidebarRef = useRef(null)
  const navigate = useNavigate()

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar()
    }
  }

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSidebar])

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
        ref={sidebarRef}
      >
        <div className='content'>
          <div className='user-section'>
            <img src={User} alt='user' className='user-image' />
            <button
              className='edit-button'
              onClick={() => {
                toggleSidebar()
                navigate('/dashboard/user')
              }}
            >
              Editar
            </button>
            <div className='separator' />
          </div>
          <NavLinks isSidebar onLinkClick={toggleSidebar} />
        </div>
      </div>
      {showSidebar && (
        <div className={`overlay ${showSidebar ? 'show' : ''}`} />
      )}
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

  .sidebar-container {
    background: var(--primary-950);
    min-height: 100vh;
    width: 200px;
    margin-left: -200px;
    transition: margin-left 0.3s ease-in-out;
    position: absolute;
    z-index: 100;
  }

  .show-sidebar {
    margin-left: 0;
  }

  .content {
    position: sticky;
    top: 0;
  }

  .user-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
  }

  .user-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }

  .edit-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .separator {
    width: 80%;
    height: 1px;
    background-color: var(--primary-500);
    margin: 1rem 0;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    visibility: hidden;
    transition: 0.3s ease-in-out all;
    z-index: 99;
  }

  .overlay.show {
    visibility: visible;
  }

  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--textColor);
    padding: 1rem 0;
    padding-left: 1.5rem;
    text-transform: capitalize;
    transition: padding-left 0.3s ease-in-out;
  }

  .nav-link:hover {
    padding-left: 2rem;
    color: var(--primary-500);
    transition: var(--transition);
  }

  .label {
    font-size: 1.2rem;
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }

  .active {
    color: var(--primary-500);
  }
`
