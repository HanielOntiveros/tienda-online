import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  
  return (
      <Layout>
        <div className='flex w-80 relative items-center justify-center mb-6'>
          <Link to='/my-orders/' className='absolute left-0'>
            <ChevronLeftIcon  className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          <h1>My order</h1>
        </div>
        <div className='flex flex-col w-80'>
            {context.order?.at(-1).products.map( shoppingProduct => (
                    <OrderCard
                        key={shoppingProduct.id}
                        shoppingProduct={shoppingProduct}
                    />
            ))}
            </div>
      </Layout>
    )
  }
  
  export default MyOrder
  