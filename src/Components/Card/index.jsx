import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Card({item}){
    const context = useContext(ShoppingCartContext)

    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"> 
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg textr-black text-xs m-2 py-1 px-2">{item.category.name}</span>
                
                <img src={item.images[0]} alt='headphones' className="w-full h-full object-cover rounded-lg"/>
                
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={()=>context.setCount( context.count +1 )}>
                    +
                </div>
            
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{item.title}</span>
                <span className="text-lg font-medium">{ `$${item.price}`}</span>
            </p>
        </div>
    )
}

export default Card