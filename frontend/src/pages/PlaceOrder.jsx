import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Order Payment',
            description: 'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: token ? { token } : {} })
                    if (data.success) {
                        setCartItems({})
                        navigate('/orders')
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            let orderItems = []
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }

            const headers = token ? { token } : {};

            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers })
                    if (response.data.success) {
                        // Agar user login nahi hai, to uski email store karein taake My Orders page fetch kar sakay
                        if (!token) {
                            localStorage.setItem('guestEmail', formData.email);
                        }
                        setCartItems({})
                        toast.success("Order Placed Successfully")
                        navigate('/orders')
                    } else {
                        toast.error(response.data.message)
                    }
                    break;

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers })
                    if (responseStripe.data.success) {
                        const { session_url } = responseStripe.data
                        window.location.replace(session_url)
                    } else {
                        toast.error(responseStripe.data.message)
                    }
                    break;

                case 'razorpay':
                    const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers })
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order)
                    } else {
                        toast.error(responseRazorpay.data.message)
                    }
                    break;

                case 'verifone':
                    const responseVerifone = await axios.post(backendUrl + '/api/order/verifone', orderData, { headers })
                    if (responseVerifone.data.success) {
                        window.location.replace(responseVerifone.data.checkout_url)
                    } else {
                        toast.error(responseVerifone.data.message)
                    }
                    break;

                default:
                    break;
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t'>
            {/* Delivery Info */}
            <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
                <div className='my-3 text-xl sm:text-2xl'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='First Name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='Last Name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='w-full px-4 py-2 border border-gray-300 rounded' type="email" placeholder='Email Address' />
                <input required onChange={onChangeHandler} name='street' value={formData.street} className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='Street' />
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='City' />
                    <input required onChange={onChangeHandler} name='state' value={formData.state} className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='w-full px-4 py-2 border border-gray-300 rounded' type="number" placeholder='Zip Code' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='w-full px-4 py-2 border border-gray-300 rounded' type="number" placeholder='Mobile' />
            </div>

            {/* Payment Section */}
            <div className='mt-8'>
                <div className='min-w-80'>
                    <CartTotal />
                </div>
                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHODS'} />
                    <div className='flex flex-col gap-3 lg:flex-row'>
                        <div onClick={() => setMethod('verifone')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'verifone' ? 'bg-green-600' : ''}`}></p>
                            <p className='mx-4 text-xs font-bold text-gray-700 uppercase'>Credit / Debit Card</p>
                        </div>
                        <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-600' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
                        </div>
                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-600' : ''}`}></p>
                            <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className='w-full mt-8 text-end'>
                        <button type='submit' className='px-16 py-3 text-sm text-white bg-black active:bg-gray-800 uppercase'>
                           {method === 'cod' ? 'Place Order' : 'Proceed to Payment'}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder