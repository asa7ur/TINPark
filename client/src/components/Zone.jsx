import styled from 'styled-components'
import { zones } from '../utils/constants'

const Zone = () => {
  return (
    <Wrapper>
      {zones.map((zone) => {
        const { name, car, free_space, map } = zone
        return (
          <div className='info' key={name}>
            <div className='text'>
              <h4>{name}</h4>
              <h5>
                <span className={car ? 'highlighted' : ''}>
                  {car ? car : 'Ningún vehículo'}
                </span>{' '}
                está aparcado aquí
              </h5>
              <p>
                Hay <span className='highlighted'>{free_space}</span> sitios
                libres
              </p>
            </div>
            <div className='map'>
              <iframe
                src={map}
                width='100%'
                height='150'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Zone

const Wrapper = styled.div`
  .info {
    margin-top: 2rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: var(--border);
    background: var(--backgroundColorAlt);
    box-shadow: var(--shadow-4);
  }

  h4 {
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  h5 {
    margin-bottom: 0.25rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    text-transform: none;
  }

  .map {
    padding-top: 0.5rem;
  }
`
