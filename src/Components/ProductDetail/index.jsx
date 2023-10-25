import { XMarkIcon } from '@heroicons/react/24/solid'
import { }
import './styles.css'

function ProductDetail(){
    return(
        <aside className='product-detail flex flex-col fixed bg-white right-0 border border-black rounded'>
            <div className='flex justify-between items-center p-6'>
                <h2 className=' font-medium text-xl'>
                    Detail
                </h2>
                <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
            </div>
        </aside>
    )
}

export default ProductDetail