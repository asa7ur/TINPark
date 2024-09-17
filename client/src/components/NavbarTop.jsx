import styled from 'styled-components'
import { links } from '../utils/constants'
import { Link } from 'react-router-dom'
import Button from './Button'

const NavbarTop = () => {
  const userLink = links.find((link) => link.id === 1)

  return (
    <Wrapper>
      <div className='section'>
        <div className='section-center'>
          <h1>Hola, Garik!</h1>
          {userLink && (
            <Link to={userLink.url}>
              <Button
                className='btn'
                icon={userLink.icon}
                url={userLink.url}
                isUserButton={true}
                showLabel={false}
              />
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
export default NavbarTop

const Wrapper = styled.div`
  border-bottom: var(--border);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #1f2937;

  .section {
    padding-bottom: 0.5rem;
  }

  .section-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0;
  }

  .icon {
    font-size: 1.5rem;
  }

  .styled-circle {
    width: 50px;
    height: 50px;
  }
`
