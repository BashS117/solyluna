import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import { useContext } from "react"
import { PerfumesContext } from "../../Context"

function Home() {

  const {products,searchByTitle,setSearchByTitle,filteredProducts}=useContext(PerfumesContext); 

  const renderView = ()=>{
    if(searchByTitle?.length > 0){
      if(filteredProducts?.length>0){
 return( filteredProducts?.map(product=>(
        <Card key={product.id} data={product}/>
      )))

      }else{
        return (
          <div>We don't have that perfume :(</div>
        )
      }
     
    }else{
      return( products?.map(product=>(
        <Card key={product.id} data={product}/>
      )))
     
    }
  }

  return (
    <>
      <div className='App bg-cyan-100 text-center'>
      <div className='relative flex w-400 items-center justify-center mb-5'> 
        <h1 className='font-medium text-xl'>Exclusive Perfumes</h1>
      </div>

      <input 
      className="rounded-lg border-2 border-black w-100 p-4 mb-4 focus:outline-none"
      onChange={(event)=>setSearchByTitle( event.target.value)}
      type="text" 
      placeholder="Search Perfume" />


        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
        renderView()
        } 
        </div>
      </div>
     
    </>
  )
}

export default Home
