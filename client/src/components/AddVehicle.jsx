import styled from 'styled-components'
import { useEffect, useRef, useCallback, useState } from 'react'
import { FormRow, FormRowSelect } from '../components'
import { VEHICLE_BRAND } from '../../../utils/constants'
import { Form, useNavigation, redirect } from 'react-router-dom'
import { useVehiclesContext } from '../pages/AllVehicles'
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await customFetch.post('/vehicles', data)
    console.log('API Response:', response)
    if (response.status === 201) {
      return redirect('/dashboard/vehicles')
    } else {
      throw new Error('No ha sido posible añadir el vehículo')
    }
  } catch (error) {
    console.error('Error:', error)
    return { error: error.message }
  }
}

const AddVehicle = () => {
  const { addVehicle, toggleAddVehicle } = useVehiclesContext()
  const modalRef = useRef(null)
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        toggleAddVehicle()
      }
    },
    [toggleAddVehicle]
  )

  // Add event listener for clicks outside the modal
  useEffect(() => {
    if (addVehicle) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [addVehicle, handleClickOutside])

  // Control modal visibility
  useEffect(() => {
    if (!isSubmitting && isSubmitted) {
      toggleAddVehicle()
    }
  }, [isSubmitting, isSubmitted])

  const handleSubmit = (e) => {
    setIsSubmitted(true)
  }

  return (
    <Wrapper className={addVehicle ? 'show' : ''}>
      <div className='content' ref={modalRef}>
        <Form method='post' className='form' onSubmit={handleSubmit}>
          <h3 className='form-title'>Añadir Vehículo</h3>
          <div className='form-center'>
            <FormRow
              type='text'
              labelText='Nombre'
              name='name'
              className='form-row'
            />
            <FormRow
              type='text'
              labelText='Matrícula'
              name='plate'
              className='form-row'
            />
            <FormRowSelect
              name='brand'
              labelText='Marca'
              defaultValue={VEHICLE_BRAND.POR_DEFECTO}
              list={Object.values(VEHICLE_BRAND)}
            />
            <div className='buttons'>
              <button
                className='action-btn'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Añadiendo...' : 'Añadir'}
              </button>
              <button
                className='action-btn'
                type='button'
                onClick={toggleAddVehicle}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Form>
      </div>
    </Wrapper>
  )
}

export default AddVehicle

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
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

  .form-title {
    margin-bottom: 1rem;
    text-align: center;
  }

  .form {
    background: none;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    row-gap: 1rem;
  }

  .form-label {
    color: var(--textColor);
  }

  input {
    border: var(--border);
    border-radius: 5px;
  }

  select {
    color: var(--textColorAlt);
    border: var(--border);
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    cursor: pointer;
  }

  option {
    background: var(--grey-100);
    color: var(--textColorAlt);
    border: var(--border);
  }
`
