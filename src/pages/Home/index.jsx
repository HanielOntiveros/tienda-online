import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card  from '../../Components/Card'
import ProductDetail  from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const handleChange = (e) => {
    context.setSearchByTitle(e.target.value)
  }

  const renderView = () => {
    if( context.searchByTitle?.length > 0) {
      if(context.filteredItems?.length > 0 ){
        return (
          context.filteredItems?.map(item => (
            <Card item = {item} key = {item.id} />
          ))
        )
      }else{
        return(
          <div>We dont have anything :(</div>
        )
      }
    } else {
      return(
        context.items?.map((item) => (
          <Card item={item} key={item.id}/>
        ))
      )
    }
  }

    return (
      <>
          <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
              <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
              type='text' 
              placeholder='Search product' 
              className='rounded-lg border border-black w-80 p-4 focus:outline-none'
              onChange={(e) =>handleChange(e)}
              />
            <div className='py-5 px-10 grid gap-4 grid-cols-4 w-full max-w-screen-lg '> 
              { renderView() }
            </div>
            <ProductDetail />
          </Layout>
          
        
      </>
    )
  }
  
  export default Home
  