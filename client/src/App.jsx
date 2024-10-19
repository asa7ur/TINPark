import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
  HomePage
} from './pages'

import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as addVehicleAction } from './components/AddVehicle'
import { action as editVehicleAction } from './pages/EditVehicle'
import { loader as dashboardLoader } from './pages/DashboardLayout'
import { loader as editVehicleLoader } from './pages/EditVehicle'
import { loader as vehiclesAndZonesLoader } from './utils/fetchVehiclesAndZones'

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
            path: 'homepage',
            element: <HomePage />,
            loader: vehiclesAndZonesLoader,
          },
          {
            path: 'vehicles',
            element: <AllVehicles />,
            loader: vehiclesAndZonesLoader,
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
            loader: vehiclesAndZonesLoader,
          },
        ],
      },
    ],
  },
])

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
