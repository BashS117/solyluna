import React from 'react'
import OrderCard from '../../Components/OrderCard'
import { useContext } from 'react'
import { PerfumesContext } from '../../Context'
import { Link } from 'react-router-dom'


const MyOrder = () => {
  const {order}=useContext(PerfumesContext);
const currentPath= window.location.pathname
let index=currentPath.substring(currentPath.lastIndexOf('/')+ 1 )

if(index==='last') index= order?.length -1

  return (
    <div> 
      <div className='relative flex w-80 items-center justify-center mb-5'>
    <Link to='/MyOrders' className='absolute left-0'>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
    </Link>


    <h1>My Order</h1>


  </div>
        <div className='flex flex-col w-80'>
      {order?.[index]?.products.map(product=>(
        <OrderCard 
        key={product.id}
        id={product.id}
        title={product.title}
        imageUrl={product.images}
        price={product.price}
        />



    ))}
      </div>
    </div>
  )
}

export default MyOrder