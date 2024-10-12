import styled from 'styled-components'
import { useEditVehicleContext } from '../pages/EditVehicle'

const EditOptions = () => {
  const { toggleVehicleState, options } = useEditVehicleContext()

  return (
    <Wrapper>
      {options.map((option) => (
        <button
          key={option.id}
          className='option'
          onClick={
            option.text === 'Corregir el estado'
              ? toggleVehicleState
              : undefined
          }
        >
          <option.icon className='icon' />
          <h5>{option.text}</h5>
        </button>
      ))}
    </Wrapper>
  )
}

export default EditOptions

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 40vh;
  width: 100%;
  background: var(--backgroundColor);
  border-radius: 25px 25px 0 0;
  border-top: var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 90vw;
    background: var(--grey-200);
    color: var(--grey-900);
    margin-bottom: 1.5rem;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: var(--border);
    cursor: pointer;

    .icon {
      font-size: 1.2rem;
    }

    h5 {
      text-transform: none;
    }
  }
`
