import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import OrderCard from '../OrderCard'


function CheckoutSideMenu(){
    const context = useContext(ShoppingCartContext)

    return(
        <aside 
        className={`${context.isOpenCheckout ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 A border border-black rounded-lg `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className=' font-medium text-xl'>
                    My Order
                </h2>
                <XMarkIcon 
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeChekout()}>
                </XMarkIcon>
                {}
            </div>
            <div className='px-6 overflow-y-scroll'>
            {context.shoppingProducts.map( shoppingProduct => (
                    <OrderCard 
                        key={shoppingProduct.id}
                        shoppingProduct={shoppingProduct}
                    />
            ))}

            </div>
        </aside>
    )
}

export default CheckoutSideMenu