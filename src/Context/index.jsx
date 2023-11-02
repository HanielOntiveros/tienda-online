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

    const [items,setItems]=useState(null)
    const [searchByTitle,setSearchByTitle]=useState(null)
    const [filteredItems,setFilteredItems]=useState(null)
    
    useEffect (()=> {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=120')
        .then(response => response.json())
        .then(data=> setItems(data))
    },[])

    const filteredItemByTitle = (items,searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect (() => {
        searchByTitle ? setFilteredItems(filteredItemByTitle(items,searchByTitle)):null
    },[items , searchByTitle])


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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}