import React from 'react'
import OrderCard from '../../Components/OrderCard'
import { useContext } from 'react'
import { PerfumesContext } from '../../Context'


const MyOrder = () => {
  const {order}=useContext(PerfumesContext);
console.log(order?.slice(-1)[0])

  return (
    <div>MyOrder
        <div className='flex flex-col w-80'>
      {order?.slice(-1)[0].products.map(product=>(
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