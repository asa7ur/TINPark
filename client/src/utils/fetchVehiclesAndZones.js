import customFetch from './customFetch'
import { redirect } from 'react-router-dom'

export const loader = async () => {
  try {
    // Fetch vehicles data
    const vehiclesResponse = await customFetch.get(`/vehicles/`)
    const { vehicles: vehiclesData } = vehiclesResponse.data

    // Fetch zones data
    const zonesResponse = await customFetch.get('/zones')
    const { zones: zonesData } = zonesResponse.data

    // Return both pieces of data in an object
    return { vehicles: vehiclesData, zones: zonesData }
  } catch (error) {
    console.error('Error fetching data:', error)
    return redirect('/dashboard/vehicles')
  }
}
