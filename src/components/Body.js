import Browse from "./Browse"
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Login'

const Body = () => {

  const appRoute = createBrowserRouter([
    {
      path : '/',
      element : <Login />
    },
    {
      path : 'browse',
      element : <Browse />
    }
  ])

  return (
    <div>
       <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body