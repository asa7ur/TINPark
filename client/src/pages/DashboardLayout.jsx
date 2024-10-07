import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'
import customFetch from '../utils/customFetch'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user')
    return data
  } catch (error) {
    return redirect('/')
  }
}

const DashboardContext = createContext()

const DashboardLayout = () => {
  const { user } = useLoaderData()

  return (
    <DashboardContext.Provider value={{ user }}>
      <Outlet context={{ user }} />
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
