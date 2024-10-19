import { Outlet, redirect, useLoaderData, useNavigate} from 'react-router-dom'
import { useState, useEffect, useContext, createContext } from 'react'
import { Sidebar, Loading } from '../components'

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
  const navigate = useNavigate()
  const { user } = useLoaderData()
  const [showSidebar, setShowSidebar] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user) {
      setIsLoading(false)
    }
  }, [user])

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const logoutUser = async () => {
    navigate('/')
    await customFetch.get('/auth/logout')
  }

  return (
    <DashboardContext.Provider
      value={{ user, showSidebar, toggleSidebar, logoutUser }}
    >
      <Sidebar />
      {isLoading ? <Loading /> : <Outlet context={{ user }} />}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
