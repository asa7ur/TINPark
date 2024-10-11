import { createContext, useContext, useState, useEffect } from 'react'

const EditVehicleContext = createContext()

export const EditVehicleProvider = ({ vehicleData, children }) => {
  const [selectedZone, setSelectedZone] = useState(vehicleData?.parked || null)
  const [modalType, setModalType] = useState(null)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleModalChange = (type = null) => {
    setModalType(type)
  }

  return (
    <EditVehicleContext.Provider
      value={{
        vehicle: vehicleData,
        selectedZone,
        setSelectedZone,
        modalType,
        handleModalChange,
        viewportHeight,
      }}
    >
      {children}
    </EditVehicleContext.Provider>
  )
}

export const useEditVehicleContext = () => useContext(EditVehicleContext)
