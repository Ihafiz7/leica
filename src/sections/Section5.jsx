import React from 'react'

export const Section5 = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12 py-32 bg-[#333]'>
        <div className='flex items-center sm:p-4 md:p-0 gap-12'>
            <img src='Logo/msg.svg' alt='Icon_Message' className='w-20 h-20 border-2 border-solid border-white rounded-full' />
            <div className='text-white font-corpS'>
                <p className='font-bold text-4xl'>Leica News</p>
                <p className='font-normal text-lg'>Stay Connected To The World of Leica with Leica News</p>
            </div>
        </div>
        <div>
            <label htmlFor='input' className='text-lg font-corpS font-normal text-white ml-2'>Your email address</label>
            <div className='flex items-center justify-between p-2 sm:w-[350px] md:w-[500px] h-[50px] bg-white rounded-3xl '>
                <input type="email" id='input' className='sm:w-[300px] md:w-[400px] outline-none ml-2'  />
                <img src='Logo/arrowW.svg ' alt='Arrow' className='w-10 h-10 border-[1px] border-solid border-white bg-black rounded-full' />
            </div>
        </div>
    </div>
  )
}
