import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from 'react'
import globalReducer from './reducer'
import { SET_VIEWPORT_HEIGHT } from './actions'

const initialState = {
  viewportHeight: window.innerHeight,
}

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const handleResize = useCallback(() => {
    dispatch({ type: SET_VIEWPORT_HEIGHT, payload: window.innerHeight })
  }, [])

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
        setViewportHeight: (height) =>
          dispatch({ type: SET_VIEWPORT_HEIGHT, payload: height }),
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
