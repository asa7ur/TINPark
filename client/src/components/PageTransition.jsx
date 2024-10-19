import { useEffect, useState } from 'react'
import styled from 'styled-components'

const PageTransition = ({ isLoading, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isLoading])

  return <Container isVisible={isVisible}>{children}</Container>
}

const Container = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
`

export default PageTransition
