import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const SettingsContainer = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <div className='section-center'>
        <div
          className='return-btn'
          onClick={() => navigate('/dashboard/homepage')}
        >
          <FaLongArrowAltLeft />
          <p>Volver</p>
        </div>
      </div>
    </Wrapper>
  )
}
export default SettingsContainer

const Wrapper = styled.div``