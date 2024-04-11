/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

const Main = () => {
  return (
    <section className=' bg-orange-700  max-h-min'>
        <div className='container mx-auto grid grid-cols-2'>
            <div className=' mx-9 py-9 '>
               <h3>Start a blog for free</h3>
               <p className='text-7xl'>publish , grow, and earn ,all in one place.</p>
               <p className='font-normal py-5'>if you have a stiry to tell knowledge to share or a perspective to offer- welcome home sign up for free so your writing can thrive in a network supported by millions of readers --not  ads</p>
            <button className='bg-white rounded-2xl px-7 p-2'>start writing</button>
            </div>
            <div className=' w-full flex justify-center'>
            <h3 className='border-l border-black h-full mr-28'></h3>
                <img width={400} height={900} className='py-9' src="https://aspenasolutions.com/uploads/Website%20Images/Aspena%20Data%20Solutions.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Main