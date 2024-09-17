import styled from 'styled-components'

const Button = ({ icon: Icon, isUserButton, showLabel, label }) => {

  return (
    <Wrapper className={`${isUserButton ? 'user-btn' : ''}`}>
      <Icon className='icon' />
      {showLabel && <span className='btn'>{label}</span>}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 1.5rem;
  }

  &.user-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #374151, #030712);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25),
      0px 0px 20px rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .user-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 38% 35%,
      rgba(55, 65, 81, 0.5),
      rgba(3, 7, 18, 0.5)
    );
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    mix-blend-mode: overlay;
    pointer-events: none;
  }
`
