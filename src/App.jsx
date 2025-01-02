import Navbar from "./Components/Navbar"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./Pages/Home"


const App = () => {

  const Layout =  () => {
    return(
      <>
        <Navbar/>
        <Outlet/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/", element: <Home/>
        },
      ]
    }
  ])

  return (
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  )
}

export default App