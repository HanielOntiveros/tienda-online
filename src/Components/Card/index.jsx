import { useContext } from "react";
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

function Card({item}){
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.closeChekout()
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductsToCart = (e, shoppingProductData) => {
        e.stopPropagation()
        context.setCount( context.count +1 )
        context.setShoppingProducts([...context.shoppingProducts, shoppingProductData])
        context.openCheckout()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCard = context.shoppingProducts.filter(product => product.id === id).length > 0
        if(isInCard){
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                <CheckIcon className="h-6 w-6 text-white "></CheckIcon>   
                </div>
            )}
            else{
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(e)=>addProductsToCart(e, item)}
                >
                <PlusIcon className="h-6 w-6 text-black"></PlusIcon>   
                </div>
            )}}

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg "
        > 
            <figure 
                className=" mb-2 w-full h-4/5 relative"
                onClick={() => showProduct(item)}
                >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 py-1 px-2">{item.category.name}</span>
                <img src={item.images[0]} alt='headphones' className="w-full h-full object-cover rounded-lg"/>
                {renderIcon(item.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{item.title}</span>
                <span className="text-lg font-medium">{ `$${item.price}`}</span>
            </p>
        </div>
    )
}

export default Card