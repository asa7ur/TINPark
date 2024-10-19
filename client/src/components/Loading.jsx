import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper>
      <div className='spinner' />
      <div className='text'>Cargando...</div>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .text {
    margin-top: 10px;
    font-size: 1.5rem;
  }
`
