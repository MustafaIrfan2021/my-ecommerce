// import express from 'express'
// import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
// import adminAuth from '../middleware/adminAuth.js'
// import authUser from '../middleware/auth.js'
// const orderRouter = express.Router()
// orderRouter.post('/list',adminAuth,allOrders)
// orderRouter.post('/status',adminAuth,updateStatus)

// orderRouter.post('/place',authUser,placeOrder)
// orderRouter.post('/stripe',authUser,placeOrderStripe)
// orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// orderRouter.post('/userorders',authUser,userOrders)
// orderRouter.post('/verifystripe',authUser,verifyStripe)
// orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

// export default orderRouter


import express from 'express'
import { placeOrder, placeOrderVerifone, verifyVerifone, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Routes
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Routes
// Note: Guest checkout support karne ke liye authUser ko optional rakha ja sakta hai 
// ya controller ke andar handle kiya jata hai.
orderRouter.post('/place', placeOrder) // COD
orderRouter.post('/verifone', placeOrderVerifone) // Verifone Payment
orderRouter.post('/verifyVerifone', verifyVerifone) // Payment Verification

// User Routes
orderRouter.post('/userorders', userOrders)

export default orderRouter