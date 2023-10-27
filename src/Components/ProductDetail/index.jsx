import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'


function ProductDetail(){
    const context = useContext(ShoppingCartContext)

    return(
        <aside 
        className={`${context.isOpenProduct ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 A border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className=' font-medium text-xl'>
                    Detail
                </h2>
                <XMarkIcon 
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeProductDetail()}>
                </XMarkIcon>
            </div>
            <figure className='p-6 mb-2'>
                <img  
                    className='w-full h-auto rounded-lg' 
                    src={context.productToShow.images} alt={context.productToShow.title}/>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                    <span className='font-medium text-lg mb-2'>{context.productToShow.title}</span>
                    <span className='font-ligth text-md leading-'>{context.productToShow.description}</span>
                </p>
            </figure>
        </aside>
    )
}

export default ProductDetail