import styled from 'styled-components'
import { useEffect } from 'react'
import { useLoaderData, useNavigate, redirect } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { CarState } from '../components'
import { inside, outside, VEHICLE_BRAND } from '../utils/constants'
import customFetch from '../utils/customFetch'
import background from '../assets/Background_3.jpg'

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/vehicles/${params.id}`)
    return data
  } catch (error) {
    console.error('Error fetching vehicle:', error)
    return redirect('/dashboard/vehicles')
  }
}

const EditVehicle = () => {
  const {vehicle} = useLoaderData() 
  const navigate = useNavigate()
  const { viewportHeight, modalType, changeState, selectZone } =
    useGlobalContext()

  useEffect(() => {
    if (vehicle && vehicle.parked) {
      selectZone(vehicle.parked)
    }
  }, [vehicle, selectZone])

  const handleClick = () => {
    navigate('/dashboard/vehicles')
  }

  if (!vehicle) {
    return <div>Loading...</div>
  }

  const { name, plate, brand, parked } = vehicle
  const options = parked ? inside : outside

  const vehicleLogo =
    VEHICLE_BRAND[brand.replace(/\s+/g, '_').toUpperCase()]?.icon ||
    VEHICLE_BRAND.POR_DEFECTO.icon

  return (
    <Wrapper style={{ height: `${viewportHeight}px` }}>
      <div className='section-center'>
        <div className='return' onClick={handleClick}>
          <FaLongArrowAltLeft />
          <p>Volver</p>
        </div>
        <div className='vehicle-info'>
          <div className='icon'>
            <img
              src={vehicleLogo}
              alt={name}
              className='img'
            />
          </div>
          <h1>{name}</h1>
          <h3>Matrícula: {plate}</h3>
          <h4>{parked ? `En ${parked}` : 'Fuera'}</h4>
        </div>
      </div>

      <div className='options'>
        {options.map((option) => (
          <button
            key={option.id}
            className='option'
            onClick={
              option.text === 'Corregir el estado'
                ? () => changeState('carState')
                : undefined
            }
          >
            <option.icon className='icon' />
            <h5>{option.text}</h5>
          </button>
        ))}
      </div>

      {modalType === 'carState' && (
        <CarState onClose={() => changeState(null)} />
      )}
    </Wrapper>
  )
}

export default EditVehicle

const Wrapper = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: var(--textColor);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;

  .return {
    cursor: pointer;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.5rem;
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  .vehicle-info {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;

    .icon {
      width: 150px;
      min-height: 125px;
      height: auto;
      display: flex;
      align-items: center;
      text-align: center;
    }

    h1 {
      margin: 0.5rem 0;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    h4 {
      margin-bottom: 0.25rem;
      font-weight: 400;
      text-transform: none;
    }
  }

  .options {
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
  }

  .option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 90vw;
    background: var(--backgroundColor);
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
