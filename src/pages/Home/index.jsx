import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card  from '../../Components/Card'
import ProductDetail  from '../../Components/ProductDetail'

function Home() {
  const [items,setItems]=useState(null)

  useEffect (()=> {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data=> setItems(data))
  },[])
    return (
      <>
          <Layout>
            <h1>Home</h1>
            <div className='py-5 px-10 grid gap-4 grid-cols-4 w-full max-w-screen-lg '> 
            {
              items?.map((item) => (
                <Card item={item} key={item.id}/>
              ))
            }
            </div>
            <ProductDetail />
          </Layout>
          
        
      </>
    )
  }
  
  export default Home
  