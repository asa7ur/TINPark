import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { useState, useContext, createContext } from 'react'
import { Sidebar } from '../components'

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
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <DashboardContext.Provider value={{ user, showSidebar, toggleSidebar }}>
      <Sidebar />
      <Outlet context={{ user }} />
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
