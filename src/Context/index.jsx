import { createContext,useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=>{
    const [count,setCount]=useState(0)
    const [isOpen,setIsOpen]=useState(false)

    const openProductDetail = () => {
      setIsOpen(true)
    }
    const closeProductDetail = () => {
      setIsOpen(false)
    }

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isOpen,
            openProductDetail,
            closeProductDetail,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}