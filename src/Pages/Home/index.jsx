import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";

function Home() {

  const [products,setProducts]=useState(null);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response=> response.json())
    .then(data=> setProducts(data))

  }, [])

  return (
    <>
      <div className='App bg-cyan-100 text-center'>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
          products?.map(product=>(
            <Card key={product.id} 
            data={product}/>
          ))
        } 
        </div>
        <ProductDetail/>
      </div>
     
    </>
  )
}

export default Home
