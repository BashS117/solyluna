import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { PerfumesContext } from "../../Context"

const NavBar =()=>{

    const {count,setSearchByCategory}= useContext(PerfumesContext);


    const activeStyle = 'underline underline-offset-4'


    return(
        <nav className="flex w-full justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-semibold">
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
                to='/'   
                onClick={()=>setSearchByCategory()}
                  className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    All
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/clothes'   
                onClick={()=>setSearchByCategory('clothes')}

                 className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Clothes
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/electronics'   
                onClick={()=>setSearchByCategory('electronics')}

                 className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Electronics
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/furnitures' 
                onClick={()=>setSearchByCategory('furniture')}

                   className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Furnitures
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/toys'  
                onClick={()=>setSearchByCategory('toys')}

                
                  className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Toys
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/others'  
                onClick={()=>setSearchByCategory('others')}

                  className={({isActive})=>
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
                    <div className="pr-5">    
                        {count}
                     </div>   
                 </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 flex absolute top-3 right-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                
                    </li>
                 

              




            </ul>
        </nav>
    )
}

export default NavBar;