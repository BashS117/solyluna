import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import { PerfumesProvider } from "../../Context"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import SignIn from "../SignIn"
import NotFound from "../NotFound"
import NavBar from "../../Components/NavBar"
import './App.css'

const AppRoutes = () => {
  let caminos = useRoutes([
    {path:'/',element: <Home/>},
    {path:'/MyAccount',element: <MyAccount/>},
    {path:'/MyOrder',element: <MyOrder/>},
    {path:'/MyOrders',element: <MyOrders/>},
    {path:'/SignIn',element: <SignIn/>},
    {path:'/*',element: <NotFound/>},
  
  ])
  return caminos;
}



const App=()=> {

  return (
    <PerfumesProvider>
    <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
    </BrowserRouter>
    </PerfumesProvider>
     
     
  )
}

export default App
