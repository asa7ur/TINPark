import { useReducer, useContext, createContext, useEffect, useCallback } from 'react'
import globalReducer from './reducer'
import {
  SELECT_ZONE,
  CHANGE_STATE,
  SET_VEHICLE,
  SET_VIEWPORT_HEIGHT,
} from './actions'

const initialState = {
  selectedZone: null,
  isModalOpen: false,
  viewportHeight: window.innerHeight,
  vehicle: null,
  modalType: null,
}

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const selectZone = (zone) => {
    dispatch({ type: SELECT_ZONE, payload: zone })
  }

  const changeState = (modalType = null) => {
    dispatch({ type: CHANGE_STATE, payload: modalType })
  }

  const handleResize = useCallback(() => {
    dispatch({ type: SET_VIEWPORT_HEIGHT, payload: window.innerHeight })
  }, [])

  const setVehicle = (vehicle) => {
    dispatch({ type: SET_VEHICLE, payload: vehicle })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        selectZone,
        changeState,
        setViewportHeight: (height) =>
          dispatch({ type: SET_VIEWPORT_HEIGHT, payload: height }),
        setVehicle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
