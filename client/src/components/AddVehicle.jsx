import styled from 'styled-components'
import { useEffect, useRef, useCallback } from 'react'
import { FormRow, FormRowSelect } from '../components'
import { VEHICLE_BRAND } from '../../../utils/constants'
import {
  Form,
  useNavigation,
  redirect,
} from 'react-router-dom'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await customFetch.post('/vehicles', data)
    console.log('API Response:', response)
    toast.success('Vehiculo Añadido')
    return redirect('/vehicles')
  } catch (error) {
    console.error('Error:', error)
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AddVehicle = ({ onClose }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'añadiendo'
  const modalRef = useRef(null)

  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <Wrapper>
      <div className='content' ref={modalRef}>
        <Form method='post' className='form'>
          <h4 className='form-title'>Añadir Vehículo</h4>
          <div className='form-center'>
            <FormRow type='text' labelText='Nombre' name='name' />
            <FormRow type='text' labelText='Matrícula' name='plate' />
            <FormRowSelect
              name='brand'
              labelText='Marca'
              defaultValue={VEHICLE_BRAND.AUDI}
              list={Object.values(VEHICLE_BRAND)}
            />
            <button
              type='submit'
              className='btn btn-block form-btn'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'añadiendo' : 'añadir'}
            </button>
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
  z-index: 1000;

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
    margin-bottom: 2rem;
  }
  .form {
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
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
`
