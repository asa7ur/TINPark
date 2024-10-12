import styled from 'styled-components'
import { useEffect, useRef, useCallback } from 'react'
import { zones } from '../utils/constants'
import { useEditVehicleContext } from '../pages/EditVehicle'

const VehicleState = () => {
  const { showVehicleState, toggleVehicleState } = useEditVehicleContext()
  const modalRef = useRef(null)

  // Close modal if clicked outside
  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        toggleVehicleState()
      }
    },
    [toggleVehicleState]
  )

  useEffect(() => {
    if (showVehicleState) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showVehicleState, handleClickOutside])

  // Only render the modal when `showVehicleState` is true
  if (!showVehicleState) return null

  return (
    <Wrapper className={showVehicleState ? 'show' : ''}>
      <div className='content' ref={modalRef}>
        <h4>Corregir el Estado</h4>
        <ul className='zones'>
          <li className='zone'>
            <label>
              <input type='radio' value='Fuera' name='vehicleState' />
              Fuera
            </label>
          </li>
          {zones.map((zone) => (
            <li key={zone.id} className='zone'>
              <label>
                <input type='radio' value={zone.name} name='vehicleState' />
                {zone.name}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={toggleVehicleState}>Cancelar</button>
      </div>
    </Wrapper>
  )
}

export default VehicleState

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.show {
    visibility: visible;
    opacity: 1;
    z-index: 1000;
  }

  .content {
    background: var(--backgroundColor);
    padding: 1.5rem;
    border: var(--border);
    border-radius: 25px;
    text-align: left;
    max-width: 500px;
    width: 80%;
  }

  h4 {
    margin-bottom: 1rem;
  }

  .zone {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  input[type='radio'] {
    margin-right: 0.5rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
`
