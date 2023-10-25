import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

function Navbar() {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline text-xl underline-offset-4'

    return(
        <nav className="bg-white/95 top-0 flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                    >
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    Electronics
                    </NavLink>
                </li>
                <li>
                    
                    <NavLink
                        to='/furnitures'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    Toys
                    </NavLink>
                </li>
                <li>                    
                    <NavLink
                        to='/others'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                        >
                    Others
                    </NavLink>
                </li>
            </ul>
            
            <ul className="flex item-center gap-3">
                <li className="text-black/60">
                    correo
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({isActive}) => 
                        isActive? activeStyle : undefined 
                      }
                    >
                    Sign in
                    </NavLink>
                </li>
                <li >
                    <div className="flex items-center">
                    <ShoppingCartIcon className="h-6 w-6 top-0"></ShoppingCartIcon>
                    <div className="text-lg font-normal mx-1">{context.count}</div>
                    </div>
                </li>
               
            </ul>
            
        </nav>
    )
}

export default Navbar