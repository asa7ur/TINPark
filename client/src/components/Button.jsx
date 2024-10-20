import styled from 'styled-components'

const Button = ({ icon: Icon, showLabel, label }) => {

  return (
    <Wrapper>
      <Icon className='icon' />
      {showLabel && {label}}
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
    font-size: 1.8rem;
  }
`
