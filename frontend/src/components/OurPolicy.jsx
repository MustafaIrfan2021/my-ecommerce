import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-8 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
        <div>
  <img src={assets.exchange_icon} className='w-12 m-auto mb-3' alt="Terms" />
  <p className='mb-2 font-semibold'>Terms & Conditions</p>
  <p className='text-gray-400'>
    By placing an order on our website, you agree to our pricing, payment processing,
    shipping timelines, and return policies. We reserve the right to refuse service
    or cancel orders in case of suspected fraud or policy violations.
  </p>
</div>

<div>
  <img src={assets.exchange_icon} className='w-12 m-auto mb-3' alt="Returns" />
  <p className='mb-2 font-semibold'>Easy Return & Exchange Policy</p>
  <p className='text-gray-400'>
    We offer a 7-day return and exchange policy. Customers may request a return
    or exchange within 7 days of receiving the product if it is unused and in
    original condition. Refunds are processed after inspection and may take
    5–7 business days.
  </p>
</div>

<div>
  <img src={assets.quality_icon} className='w-12 m-auto mb-3' alt="Privacy" />
  <p className='mb-2 font-semibold'>Privacy Policy</p>
  <p className='text-gray-400'>
    We respect your privacy. Any personal information collected during checkout
    is used only to process orders and provide customer support. We do not sell
    or share customer data with third parties except payment processors and
    shipping partners.
  </p>
</div>

<div>
  <img src={assets.support_img} className='w-12 m-auto mb-3' alt="Support" />
  <p className='mb-2 font-semibold'>Customer Support</p>
  <p className='text-gray-400'>
    We provide customer support via email and contact form.
    Response time is usually within 24–48 business hours.
  </p>
</div>

    </div>
  )
}

export default OurPolicy
