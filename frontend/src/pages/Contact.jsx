// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsLetterBox from '../components/NewsLetterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='pt-10 text-2xl text-center border-t'>
//         <Title text1={'CONTACT'} text2={'US'} />
//       </div>
//       <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Photo" />
//         <div className='flex flex-col items-start justify-center gap-6'>
//           <p className='text-xl font-semibold text-gray-600'>Our Store</p>
//           <p className='text-gray-500'>Office #101, Dolmen Mall, Clifton <br />Karachi, Pakistan</p>
//           <p className='text-gray-500'>Tel:  (+92) 302-2338756 <br />Email: contact.trendify@info.com</p>
//           <p className='text-xl font-semibold text-gray-600'>Careers at Forever</p>
//           <p className='text-gray-500'>Join us at Trendify! Explore job openings and help shape the future of fashion. <br />Explore our current job openings and discover how you can contribute to our mission of setting trends and creating style.</p>
//           <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-gray-800 hover:text-white'>Explore Jobs</button>
//         </div>
//       </div>
//       <NewsLetterBox />
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Yahan aap apna backend logic ya email service (like EmailJS) laga sakte hain
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  }

  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col justify-center gap-12 my-10 md:flex-row mb-28'>
        {/* Left Side: Contact Info */}
        <div className='flex flex-col items-start justify-center gap-6 md:w-1/3'>
          <p className='text-xl font-semibold text-gray-600'>Our Office & Studio</p>
          <p className='text-gray-500 leading-6'>
            Office #101, Dolmen Mall, Clifton <br /> 
            Karachi, 75600, Pakistan
          </p>
          
          <div className='text-gray-500'>
            <p className='font-medium text-gray-700'>Customer Support:</p>
            <p>Tel: (+92) 302-2338756</p>
            <p>Email: contact.trendify@info.com</p>
            <p>WhatsApp: (+92) 302-2338756</p>
          </div>

          <p className='text-xl font-semibold text-gray-600'>Business Hours</p>
          <p className='text-gray-500'>
            Monday - Saturday: 9:00 AM - 6:00 PM <br />
            Sunday: Closed
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className='md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-sm'>
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <h2 className='text-lg font-medium text-gray-700 mb-2'>Send us a Message</h2>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input 
                type="text" 
                placeholder='Your Name' 
                className='w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-black'
                required 
              />
              <input 
                type="email" 
                placeholder='Your Email' 
                className='w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-black'
                required 
              />
            </div>
            <input 
              type="text" 
              placeholder='Subject' 
              className='w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-black'
              required 
            />
            <textarea 
              rows="4" 
              placeholder='How can we help you?' 
              className='w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-black resize-none'
              required
            ></textarea>
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 transition-all duration-300 rounded'>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      
      <NewsLetterBox />
    </div>
  )
}

export default Contact