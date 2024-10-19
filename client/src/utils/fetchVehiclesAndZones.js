import customFetch from './customFetch'
import { redirect } from 'react-router-dom'

export const loader = async () => {
  try {
    // Fetch vehicle data
    const vehicleResponse = await customFetch.get(`/vehicles/`)
    const { vehicles: vehicleData } = vehicleResponse.data

    // Fetch zone data
    const zoneResponse = await customFetch.get('/zones')
    const { zones: zoneData } = zoneResponse.data

    // Return both pieces of data in an object
    return { vehicles: vehicleData, zones: zoneData }
  } catch (error) {
    console.error('Error fetching data:', error)
    return redirect('/dashboard/vehicles')
  }
}
