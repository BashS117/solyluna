import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import { useContext } from "react"
import { PerfumesContext } from "../../Context"

function Home() {

  const {products,searchByTitle,setSearchByTitle}=useContext(PerfumesContext); 




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
          products?.map(product=>(
            <Card key={product.id} 
            data={product}/>
          ))
        } 
        </div>
      </div>
     
    </>
  )
}

export default Home
