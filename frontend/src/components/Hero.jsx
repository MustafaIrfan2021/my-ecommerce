import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    // min-h-[500px] se minimum height set hogi aur h-[70vh] se screen ka 70% area cover hoga
    <div className='flex flex-col border border-gray-400 sm:flex-row min-h-[500px] md:h-[70vh] overflow-hidden'>
        
        {/* Hero left side */}
        <div className='flex items-center justify-center w-full py-20 sm:w-1/2 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='text-sm font-medium md:text-base'>OUR BEST SELLERS</p>
                </div>
                <h1 className='text-3xl leading-relaxed sm:py-3 lg:text-5xl prata-regular'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='text-sm font-semibold md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Hero right side */}
        {/* object-cover se image stretch nahi hogi, balki box ko fill karegi */}
        <img 
          className='w-full sm:w-1/2 object-cover' 
          src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Hero Image" 
        />
    </div>
  )
}

export default Hero


// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col border border-gray-400 sm:flex-row'>
//         {/* Hero left side */}
//         <div className='flex flex-col items-center justify-center w-full sm:w-1/2'>
//             <img 
//               className='w-full h-full object-cover' 
//               src="https://media.istockphoto.com/id/92066451/photo/black-leather-motorcycle-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=aDLL1FU_F4ZWU_qpGFvjcabfi9oUqf1rAgr2J0rVdoI=" 
//               alt="Left Image" 
//             />
            
//             <div className='text-[#414141]'>
//             </div>
//         </div>

//         {/* Hero right side */}
//         <div className='w-full sm:w-1/2'>
//             <img 
//               className='w-full h-full object-cover' 
//               src='https://images.unsplash.com/photo-1489286696299-aa7486820bd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGphY2tldHN8ZW58MHx8MHx8fDA%3D' 
//               alt="Right Image" 
//             />
//         </div>
//     </div>
//   )
// }

// export default Hero