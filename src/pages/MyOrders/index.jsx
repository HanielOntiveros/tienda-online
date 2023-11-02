import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard  from '../../Components/OrdersCard'

        

function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      
      <Layout>
        <div className='flex w-80 items-center justify-center mb-4'>
          <h1 className='font-medium text-xl'>My orders</h1>
        </div>
        {context.order.map((ord,index) =>(
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              order={ord}
            />
          </Link>
        ))}
        </Layout>
      
    )
  }
  
  export default MyOrders
  