import { createContext,useState,useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=>{
    const [count,setCount]=useState(0)

    const [isOpenProduct,setIsOpen]=useState(false)
    const [productToShow,setProductToShow]=useState({})
    const [shoppingProducts, setShoppingProducts] = useState([])
    const [order , setOrder] = useState([])

    const [isOpenCheckout,setIsOpenCheckout]=useState(false)
    
    const openProductDetail = () => { setIsOpen(true) }
    const closeProductDetail = () => { setIsOpen(false) }

    const openCheckout = () => { setIsOpenCheckout(true) }
    const closeChekout = () => { setIsOpenCheckout(false) }


  
    

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isOpenProduct,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            shoppingProducts,
            setShoppingProducts,
            isOpenCheckout,
            openCheckout,
            closeChekout,
            order,
            setOrder,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}