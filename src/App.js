import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { Products } from "./Pages/Products/Products";
import "./app.scss"

const Layout = () =>{
  return(
    <div className="app">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products/:id",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<Product />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
