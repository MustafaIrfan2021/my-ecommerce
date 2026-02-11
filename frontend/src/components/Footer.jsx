// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//             <div>
//                 <Link to='/'>
//                     <img src={assets.logo} className='w-32 mb-5 cursor-pointer' alt="Trendify" />
//                 </Link>
//                 <p className='w-full text-gray-600 md:w-2/3'>Thank you for shopping with Trendify! We're dedicated to bringing you the latest trends and top-quality products. Follow us on social media for updates on new arrivals, exclusive offers, and more. If you have any questions or need assistance, our friendly customer support team is here to help. Subscribe to our newsletter for special discounts and be the first to know about our latest promotions. Your style journey starts here—let's make it unforgettable!</p>
//             </div>

//             <div>
//                 <p className='mb-5 text-xl font-medium'>COMPANY</p>
//                 <ul className='flex flex-col gap-1 text-gray-600'>
//                     <Link to='/'>
//                         <li>Home</li>
//                     </Link>
//                     <Link to='/about'>
//                         <li>About Us</li>
//                     </Link>
//                     <Link to='/about'>
//                         <li>Delivery</li>
//                     </Link>
//                     <Link to='/about'>
//                         <li>Privacy & Policy</li>
//                     </Link>
//                 </ul>
//             </div>

//             <div>
//                 <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
//                 <ul className='flex flex-col gap-1 text-gray-600'>
//                     <li>+11-558-669-447</li>
//                     <li>contact.trendify@info.com</li>
//                 </ul>
//             </div>
//         </div>
//         <div>
//             <hr />
//             <p className='py-5 text-sm text-center'>Copyright 2024 Trendify. All rights reserved.</p>
//         </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-40'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm border-t pt-10'>
        
        {/* Brand Section */}
        <div>
          <Link to='/'>
            <img src={assets.logo} className='w-32 mb-5 cursor-pointer' alt="Trendify" />
          </Link>
          <p className='w-full text-gray-600 md:w-2/3 leading-6'>
            Trendify is your premier destination for premium leather jackets and high-quality fashion. 
            We ensure 100% secure payments via Verifone and provide worldwide shipping via DHL/FedEx. 
            Your satisfaction is our priority.
          </p>
        </div>

        {/* Company Links - Verifone Auditors Check This! */}
        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <Link to='/' className='hover:text-black'><li>Home</li></Link>
            <Link to='/about' className='hover:text-black'><li>About Us</li></Link>
            <Link to='/shipping' className='hover:text-black'><li>Delivery & Shipping</li></Link>
            <Link to='/privacy-policy' className='hover:text-black'><li>Privacy Policy</li></Link>
            <Link to='/return-policy' className='hover:text-black'><li>Return & Refund Policy</li></Link>
            <Link to='/terms' className='hover:text-black'><li>Terms & Conditions</li></Link>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>📞 +92 3XX XXXXXXX</li>
            <li>📧 contact.trendify@info.com</li>
            <li className='mt-2'>📍 123 Business Street, Karachi, Pakistan</li>
            {/* Payment Icons Trust Badges - Yeh lagana mat bhoolna */}
            <div className='flex gap-2 mt-4'>
               <span className='text-[10px] border px-1 border-gray-400 rounded'>VISA</span>
               <span className='text-[10px] border px-1 border-gray-400 rounded'>MasterCard</span>
               <span className='text-[10px] border px-1 border-gray-400 rounded'>Verifone</span>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-500'>Copyright 2024 © Trendify.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer