import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Principal,
  MisVehiculos,
  Zonas,
  Vehiculo,
  Error,
  Login,
  Register,
} from './pages'

import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as addVehicleAction } from './components/AddVehicle'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Principal />,
      },
      {
        path: 'misvehiculos',
        element: <MisVehiculos />,
        action: addVehicleAction,
      },
      {
        path: 'zonas',
        element: <Zonas />,
      },
      {
        path: 'misvehiculos/:id',
        element: <Vehiculo />,
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
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
