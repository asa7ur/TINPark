import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { NavbarBottom } from '../components'
import { useContext, createContext } from 'react'
import customFetch from '../utils/customFetch'
import styled from 'styled-components'

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
        <main className='dashboard'>
          <div className='dashboard-page'>
            <Outlet context={{ user }} />
          </div>
          <NavbarBottom />
        </main>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
