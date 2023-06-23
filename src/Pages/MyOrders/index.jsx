import React from 'react'
import OrdersCard from '../../Components/OrdersCard';
import { useContext } from 'react';
import { PerfumesContext } from '../../Context'
import { Link } from 'react-router-dom';


const MyOrders = () => {
  const { order, setOrder } = useContext(PerfumesContext);
  console.log(order);

  return (
    <div>
      <div className='relative flex w-400 items-center justify-center mb-5'>
        <h1 className='font-medium text-xl'>My Orders</h1>
        
      </div>
      {
        order.map((order, index) => (
          <Link  key={index} to={`/MyOrders/${index}`}>
            <OrdersCard
            
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))

      }
    </div>
  )
}

export default MyOrders;