// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsLetterBox from '../components/NewsLetterBox'

// const About = () => {
//   return (
//     <div>
//       <div className='pt-8 text-2xl text-center border-t'>
//         <Title text1={'ABOUT'} text2={'US'} />
//       </div>
//       <div className='flex flex-col gap-16 my-10 md:flex-row'>
//         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Photo" />
//         <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
//           <p>Welcome to Trendify, where style meets quality. Our mission is to bring you the latest fashion trends and must-have items, all curated with an eye for quality and design. We believe that everyone deserves to express themselves through fashion, and we're here to make that easier and more enjoyable. Our collections are carefully selected to offer you a range of options that cater to every taste and occasion.</p>
//           <p>At Trendify, we prioritize your satisfaction. From the moment you browse our site to the day your order arrives, we are dedicated to providing a seamless shopping experience. Our team is always on the lookout for the latest trends, ensuring that you have access to the freshest styles as soon as they hit the runway. Thank you for choosing Trendify. We’re excited to be a part of your style journey.</p>
//           <b className='text-gray-800'>Our Mission</b>
//           <p>At Trendify, our mission is to empower you to express your unique style with high-quality, on-trend fashion. We strive to make fashion accessible to all, offering diverse products that inspire confidence.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>At Trendify, our vision is to be a global fashion leader, known for cutting-edge style and quality. We aim to inspire confidence and creativity, making Trendify the go-to choice for individual expression.</p>
//         </div>
//       </div>
//       <div className='py-4 text-xl'>
//         <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>
//       <div className='flex flex-col mb-20 text-sm md:flex-row'>
//         <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
//           <b>Quality Assurance</b>
//           <p className='text-gray-600'>At Trendify, quality comes first. Every product is carefully chosen and inspected to meet our high standards. Shop with confidence, knowing we ensure excellence in every detail.</p>
//         </div>
//         <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
//           <b>Convenience</b>
//           <p className='text-gray-600'>Trendify ensures a smooth shopping experience with easy browsing, fast shipping, simple returns, and multiple payment options. Your comfort and satisfaction are our priorities.</p>
//         </div>
//         <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
//           <b>Exceptional Customer Service</b>
//           <p className='text-gray-600'>At Trendify, exceptional service is our promise. Our dedicated support team is here to assist you with any questions or concerns, ensuring a smooth and satisfying shopping experience.</p>
//         </div>
//       </div>
//       <NewsLetterBox />
//     </div>
//   )
// }

// export default About
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      {/* Page Title */}
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Main About Section */}
      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Photo" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Welcome to Trendify, Pakistan's premium leather brand, where style meets unmatched quality. Our mission is to craft timeless leather products — jackets, bags, belts, and accessories — that combine fashion and durability. Every piece is designed with attention to detail and made from ethically sourced leather.</p>
          
          <p>From browsing our website to receiving your order, we ensure a smooth and secure shopping experience. We accept international payments through Verifone 2Checkout, allowing customers worldwide to shop confidently. Our team constantly monitors trends to bring you leather products that are stylish, functional, and long-lasting.</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>To empower customers globally to express themselves with premium leather fashion. We aim to provide top-quality products and seamless international shopping, making Trendify the go-to leather brand for modern style enthusiasts.</p>

          <b className='text-gray-800'>Our Vision</b>
          <p>To become a leading international leather brand, trusted for quality, style, and customer satisfaction. We envision a world where our leather products inspire confidence, elegance, and timeless fashion.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='py-4 text-xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Premium Quality Leather</b>
          <p className='text-gray-600'>Every Trendify product is made from ethically sourced leather, crafted to perfection. Durability and style go hand-in-hand to ensure you receive long-lasting products.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Global Shopping Convenience</b>
          <p className='text-gray-600'>We accept international payments securely through Verifone 2Checkout. Enjoy easy browsing, multiple payment options, fast shipping, and hassle-free returns worldwide.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our dedicated support team is available via email, WhatsApp, or contact form. We ensure all inquiries, orders, and concerns are handled promptly for a seamless shopping experience.</p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsLetterBox />
    </div>
  )
}

export default About
