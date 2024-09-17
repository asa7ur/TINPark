import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Principal, MisVehiculos, Zonas, Vehiculo, Error, Login, Registrarse } from './pages'

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
      },
      {
        path: 'registrarse',
        element: <Registrarse />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
