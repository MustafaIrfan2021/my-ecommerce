import React from 'react'

const PolicyPage = ({ title, content }) => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10'>
      <div className='text-2xl text-center pt-8 border-t'>
        <h1 className='text-gray-500 font-bold uppercase'>{title}</h1>
      </div>
      <div className='my-10 text-gray-600 leading-8 text-justify bg-gray-50 p-6 sm:p-10 rounded-lg shadow-sm'>
        {content}
      </div>
    </div>
  )
}

export default PolicyPage