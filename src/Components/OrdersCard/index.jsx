import { ChevronRightIcon } from '@heroicons/react/24/solid'


const OrdersCard = ({order}) => {
  const {totalPrice, totalProduct} = order


  return (
    <div className='flex w-80 items-center mb-4  p-4  border border-black rounded-lg'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex flex-col'>
              <p>Date</p>
              <p className='font-light text-lg'>{totalProduct} article</p>
          </div>
            <div className='flex justify-between gap-2'>
              <p className='font-medium text-xl '>${totalPrice}</p>  
              <ChevronRightIcon  className='h-6 w-6 text-black cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default OrdersCard
