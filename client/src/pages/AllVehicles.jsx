import { VehiclesContainer, NavbarTop, NavbarBottom} from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/vehicles')
    return { data }
  } catch (error) {
    return error
  }
}

const AllVehiclesContext = createContext()
const AllVehicles = () => {
  const { data } = useLoaderData()

  return (
    <AllVehiclesContext.Provider value={{ data }}>
      <NavbarTop/>
      <VehiclesContainer />
      <NavbarBottom/>
    </AllVehiclesContext.Provider>
  )
}

export const useAllVehiclesContext = () => useContext(AllVehiclesContext)

export default AllVehicles
