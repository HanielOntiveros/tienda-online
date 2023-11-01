import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard  from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'


function CheckoutSideMenu(){
    const context = useContext(ShoppingCartContext)
    const handleDelete = (id) => {
        const filteredProducts = context.shoppingProducts.filter(product => product.id != id)
        context.setShoppingProducts(filteredProducts)
    }

    const handleCheckout = () => {
            const orderToAdd = {
                date: new Date(),
                products: context.shoppingProducts,
                totalProduct: context.shoppingProducts.length,
                totalPrice: totalPrice(context.shoppingProducts)
            }   
    
            context.setOrder([...context.order, orderToAdd])
            context.setShoppingProducts([])
            context.closeChekout()
    }
    
    console.log(context.order);

    return(
        <aside 
        className={`${context.isOpenCheckout ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-1 A border border-black rounded-lg `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className=' font-medium text-xl'>
                    My Order
                </h2>
                <XMarkIcon 
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeChekout()}>
                </XMarkIcon>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {context.shoppingProducts.map( shoppingProduct => (
                    <OrderCard 
                        key={shoppingProduct.id}
                        shoppingProduct={shoppingProduct}
                        handleDelete = {handleDelete}
                    />
            ))}
            </div>
            <div className=' p-6'>
                <p className='flex justify-between items-center p-2'>
                    <span className='font-light text-lg'>Total</span> 
                    <span className='font-medium text-xl'> ${totalPrice(context.shoppingProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className={context.shoppingProducts.length > 0 ?'w-full bg-black mt-2 py-3 text-white rounded-lg':'hidden'}
                        onClick={() => handleCheckout() }
                    >
                        Check out
                    </button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu