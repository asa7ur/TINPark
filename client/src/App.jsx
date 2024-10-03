import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  Vehicles,
  Zones,
  Vehicle,
  Error,
  Login,
  Register,
  DashboardLayout,
} from './pages'

import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as addVehicleAction } from './components/AddVehicle'
import { loader as dashboardLoader } from './pages/DashboardLayout'

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
        pash: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            path: 'vehicles',
            element: <Vehicles />,
            action: addVehicleAction,
          },
          {
            path: 'zones',
            element: <Zones />,
          },
          {
            path: 'vehicles/:id',
            element: <Vehicle />,
          },
        ],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
