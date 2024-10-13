import styled from 'styled-components'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigation, Form } from 'react-router-dom'
import { useEditVehicleContext } from '../pages/EditVehicle'

const VehicleState = () => {
  const {
    showVehicleState,
    selectZone,
    handleZoneChange,
    toggleVehicleState,
    zones,
  } = useEditVehicleContext()

  const modalRef = useRef(null)
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  // Control modal visibility
  useEffect(() => {
    if (!isSubmitting && isSubmitted) {
      toggleVehicleState()
    }
  }, [isSubmitting, isSubmitted])

  const handleSubmit = (e) => {
    setIsSubmitted(true)
  }

  return (
    <Wrapper className={showVehicleState ? 'show' : ''}>
      <div className='content' ref={modalRef}>
        <h4>Corregir el Estado</h4>
        <Form method='post' onSubmit={handleSubmit}>
          <ul className='zones'>
            <li className='zone'>
              <label>
                <input
                  type='radio'
                  value='' // Use an empty string for "Fuera"
                  name='vehicleState'
                  checked={selectZone === ''}
                  onChange={handleZoneChange}
                />
                Fuera
              </label>
            </li>
            {zones.map((zone) => (
              <li key={zone._id} className='zone'>
                <label>
                  <input
                    type='radio'
                    value={zone._id}
                    name='vehicleState'
                    checked={selectZone === zone._id}
                    onChange={handleZoneChange}
                  />
                  {zone.name}
                </label>
              </li>
            ))}
          </ul>
          <button type='button' onClick={toggleVehicleState}>
            Cancelar
          </button>
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
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
  z-index: -1;
  transition: opacity 0.3s ease, z-index 0s linear 0.3s;

  &.show {
    opacity: 1;
    z-index: 1000;
    transition: opacity 0.3s ease, z-index 0s linear;
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
