import React from 'react'
import OrdersCard from '../../Components/OrdersCard';
import { useContext } from 'react';
import { PerfumesContext } from '../../Context'
import { Link } from 'react-router-dom';


const MyOrders = () => {
  const { order, setOrder } = useContext(PerfumesContext);

  return (
    <div>
      <div className='relative flex w-80 items-center justify-center'>
        <h1>My Orders</h1>
      </div>
      {
        order.map((order, index) => {
          <Link key={index} to={`/MyOrders/${order.id}`}>

            <OrdersCard
              totalPrice={order.totalPrice}
              totalProduct={order.totalProducts} />


          </Link>


        })


      }
    </div>
  )
}

export default MyOrders;