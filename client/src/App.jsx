import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  HomeLayout,
  Landing,
  AllVehicles,
  AllZones,
  EditVehicle,
  Error,
  Login,
  Register,
  DashboardLayout,
} from './pages'

import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as addVehicleAction } from './components/AddVehicle'
import { action as editVehicleAction } from './pages/EditVehicle'
import { loader as dashboardLoader } from './pages/DashboardLayout'
import { loader as editVehicleLoader } from './pages/EditVehicle'
import { loader as allVehiclesLoader } from './pages/AllVehicles'
import { loader as allZonesLoader } from './pages/AllZones'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            path: 'vehicles',
            element: <AllVehicles />,
            loader: allVehiclesLoader,
            action: addVehicleAction,
          },
          {
            path: 'vehicles/:id',
            element: <EditVehicle />,
            loader: editVehicleLoader,
            action: editVehicleAction,
          },
          {
            path: 'zones',
            element: <AllZones />,
            loader: allZonesLoader,
          },
        ],
      },
    ],
  },
])

const App = () => {
  // Viewport height state
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div style={{ height: viewportHeight }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
