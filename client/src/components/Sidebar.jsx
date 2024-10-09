import styled from 'styled-components'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { useDashboardContext } from '../pages/DashboardLayout'

const Sidebar = () => {
  const { showSidebar } = useDashboardContext()

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>{/* <Logo /> */}</header>
          <NavLinks isSidebar />
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
    background: var(--backgroundColorAlt);
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

  header {
    height: 6rem;
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
  }

  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--textColorAlt);
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

  .label{
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
