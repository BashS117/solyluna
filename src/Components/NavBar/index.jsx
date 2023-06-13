import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { PerfumesContext } from "../../Context"

const NavBar =()=>{

    const {count}= useContext(PerfumesContext);


    const activeStyle = 'underline underline-offset-4'


    return(
        <nav className="flex w-full justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
               <li className="font-bold text-lg">
                <NavLink 
                to='/'
                >
                    SOL Y LUNA
                </NavLink>
                </li> 

                <li className="">
                <NavLink 
                to='/'     className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    All
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/clothes'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Clothes
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/electronics'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Electronics
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/fornitures'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Fornitures
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/toys'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Toys
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/others'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Others
                </NavLink>
                </li> 




            </ul>

            <ul className="flex items-center gap-3">
               <li className="text-black/60">
                deisylorena@gmail.caminos
                </li> 

                <li>
                <NavLink 
                to='/MyOrders'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    MyOrders
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/MyAccount'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    MyAccount
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/SignIn'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    SignIn
                </NavLink>
                </li> 

                <li>
                    CarritodeCompras {count}
                </li> 

              




            </ul>
        </nav>
    )
}

export default NavBar;