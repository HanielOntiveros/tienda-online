import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

export const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext)

    const openCheckoutMenu = () => {
      
      console.log(context.isOpenCheckout);
    }
  return (
    <div className="flex items-center">
        <ShoppingCartIcon 
          className="h-6 w-6 top-0 cursor-pointer"
          onClick={() => openCheckoutMenu()}
        >
        </ShoppingCartIcon>
        <div className="text-lg font-normal mx-1">{context.count}</div>
        
    </div>
    )
}
