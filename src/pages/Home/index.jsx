import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card  from '../../Components/Card'

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
            Home
            <div className='grid gap-4 grid-cols-1 w-full max-w-screen-lg '> 
            {
              items?.map((item) => (
                <Card item={item} key={item.id}/>
              ))
            }
            </div>
          </Layout>
          
        
      </>
    )
  }
  
  export default Home
  