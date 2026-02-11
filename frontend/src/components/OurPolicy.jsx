// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col justify-around gap-12 py-8 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
//         <div>
//   <img src={assets.conditions} className='w-12 m-auto mb-3' alt="Terms" />
//   <p className='mb-2 font-semibold'>Terms & Conditions</p>
//   <p className='text-gray-400'>
//     By placing an order on our website, you agree to our pricing, payment processing,
//     shipping timelines, and return policies. We reserve the right to refuse service
//     or cancel orders in case of suspected fraud or policy violations.
//   </p>
// </div>

// <div>
//   <img src={assets.exchange_icon} className='w-12 m-auto mb-3' alt="Returns" />
//   <p className='mb-2 font-semibold'>Easy Return & Exchange Policy</p>
//   <p className='text-gray-400'>
//     We offer a 7-day return and exchange policy. Customers may request a return
//     or exchange within 7 days of receiving the product if it is unused and in
//     original condition. Refunds are processed after inspection and may take
//     5–7 business days.
//   </p>
// </div>

// <div>
//   <img src={assets.quality_icon} className='w-12 m-auto mb-3' alt="Privacy" />
//   <p className='mb-2 font-semibold'>Privacy Policy</p>
//   <p className='text-gray-400'>
//     We respect your privacy. Any personal information collected during checkout
//     is used only to process orders and provide customer support. We do not sell
//     or share customer data with third parties except payment processors and
//     shipping partners.
//   </p>
// </div>

// <div>
//   <img src={assets.support_img} className='w-12 m-auto mb-3' alt="Support" />
//   <p className='mb-2 font-semibold'>Customer Support</p>
//   <p className='text-gray-400'>
//     We provide customer support via email and contact form.
//     Response time is usually within 24–48 business hours.
//   </p>
// </div>

//     </div>
//   )
// }

// export default OurPolicy

import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-20 border-t border-b sm:flex-row sm:gap-4 text-center text-gray-700'>
      
      {/* 1. Return Policy - Updated to 14 Days for International Trust */}
      <div className='flex-1 px-4'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Returns" />
        <p className='font-bold text-gray-800 uppercase tracking-wide'>14-Day Easy Return</p>
        <p className='text-gray-500 mt-2 leading-relaxed'>
          We offer a 14-day return policy. If you're not satisfied with the fit or quality, 
          return it in original condition for a full refund or exchange.
        </p>
      </div>

      {/* 2. Secure Payment - Verifone Approval ke liye ye bohot zaroori hai */}
      <div className='flex-1 px-4'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Secure Payment" />
        <p className='font-bold text-gray-800 uppercase tracking-wide'>Secure Payments</p>
        <p className='text-gray-500 mt-2 leading-relaxed'>
          Your transactions are 100% secure. We use Verifone (2Checkout) to process 
          payments, ensuring your card data is encrypted and protected.
        </p>
      </div>

      {/* 3. Global Shipping - Leather Jackets ke liye important info */}
      <div className='flex-1 px-4'>
        <img src={assets.conditions} className='w-12 m-auto mb-5' alt="Shipping" />
        <p className='font-bold text-gray-800 uppercase tracking-wide'>Worldwide Shipping</p>
        <p className='text-gray-500 mt-2 leading-relaxed'>
          We ship leather jackets globally via DHL & FedEx. Delivery usually takes 
          7–12 business days with full tracking provided.
        </p>
      </div>

      {/* 4. Support */}
      <div className='flex-1 px-4'>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support" />
        <p className='font-bold text-gray-800 uppercase tracking-wide'>Expert Support</p>
        <p className='text-gray-500 mt-2 leading-relaxed'>
          Have questions about sizing or material? Our team is available 24/7 
          to assist you via email or WhatsApp.
        </p>
      </div>

    </div>
  )
}

export default OurPolicy