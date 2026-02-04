import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const newStatus = event.target.value;
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: newStatus },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Status updated successfully");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  };
  
  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className='w-full'>
      <h3 className='mb-4 text-xl font-medium'>Order Page</h3>
      
      <div className='flex flex-col gap-4'>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-6 items-start border border-gray-200 p-6 md:p-8 text-xs sm:text-sm text-gray-700 bg-white"
          >
            {/* Order Icon */}
            <img className="w-10 lg:w-12 border p-2" src={assets.parcel_icon} alt="Parcel Icon" />
            
            {/* Order Items & Address */}
            <div>
              <div className='font-normal'>
                {order.items.map((item, itemIndex) => (
                  <p className="py-0.5" key={itemIndex}>
                    {item.name} x {item.quantity} <span className='text-gray-400'>{item.size}</span>
                    {itemIndex !== order.items.length - 1 && ","}
                  </p>
                ))}
              </div>
              <p className="mt-4 mb-1 font-semibold text-gray-800">
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div className='text-gray-500 leading-5'>
                <p>{order.address.street + ','}</p>
                <p>
                  {order.address.city + ', ' + order.address.state + ', ' + order.address.country + ', ' + order.address.zipcode}
                </p>
                <p className='mt-1'>{order.address.phone}</p>
              </div>
            </div>

            {/* Order Summary */}
            <div className='flex flex-col gap-1'>
              <p className="font-medium">Items : {order.items.length}</p>
              <p className="mt-2">Method : {order.paymentMethod}</p>
              <p>Payment : <span className={order.payment ? 'text-green-600' : 'text-orange-500'}>{order.payment ? 'Done' : 'Pending'}</span></p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Price */}
            <p className="text-base font-semibold text-gray-900">
              {currency}{order.amount}
            </p>

            {/* Status Dropdown */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 px-3 font-medium bg-white border border-gray-300 rounded-sm focus:outline-none cursor-pointer"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
