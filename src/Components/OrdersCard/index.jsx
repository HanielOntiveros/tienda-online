import { XMarkIcon } from '@heroicons/react/24/solid'


const OrdersCard = ({totalProducts,totalPrice}) => {

  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
        <p className='text-lg font-medium'>
            <span>Date</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span> 
        </p>
    </div>
  )
}

export default OrdersCard
