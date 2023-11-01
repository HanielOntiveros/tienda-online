import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard  from '../../Components/OrdersCard'

        

function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <>
      <Layout>
        <div className='flex w-80 items-center justify-center'>
          <h1>My orders</h1>
        </div>
        {context.order.map((ord,index) =>(
          <Link key={index} to={`/my-orders/${ord.id}`}>
            <OrdersCard 
              order={ord}
            />
          </Link>
        ))}
        </Layout>
      </>
    )
  }
  
  export default MyOrders
  