import React from 'react'

export const Section2 = () => {
  return (
    <div className='flex sm:flex-col md:flex-row xl:flex-row items-center justify-center my-8 gap-12 font-corpS '>
        <div className='flex flex-col justify-start sm:w-[400px] md:w-[400px] xl:w-[600px] h-[400px] border-2 border-white bg-white shadow-lg hover:shadow-2xl'>
            <img src='Logo/s2i1.jpg' alt='Cameras' loading='lazy' className='w-full h-[350px] object-contain' />
            <div className='p-2'>
                <li className='text-2xl font-bold list-none'>Leica Pre-owned</li>
                <li className='flex items-center justify-between'>It onmy takes a secod to fall in love. <img src='Logo/arrow.svg' alt='Arrow' className='w-6 h-6' /></li>
            </div>
        </div>
        <div className=' flex flex-col gap-8'>
            <div className='flex flex-col justify-start w-[400px] h-[340px] border-2 border-white bg-white shadow-lg hover:shadow-2xl'>
                <img src='Logo/p2i2.jpg' alt='M_is_Moments' loading='lazy' className='w-full h-[80%] object-contain' />
                <div className='p-2'>
                    <li className='text-2xl font-bold list-none'>M is Moments</li>
                    <li className='flex items-center justify-between'>Discover the magic. <img src='Logo/arrow.svg' alt='Arrow' className='w-6 h-6' /> </li>
                </div>
            </div>
            <div className='flex flex-col justify-start w-[400px] h-[340px] border-2 border-white bg-white shadow-lg hover:shadow-2xl'>
                <img src='Logo/s2i3.jpg' alt='Leica_TV_box' loading='lazy' className='w-full h-[80%] object-contain' />
                <div className='p-2'>
                    <li className='text-2xl font-bold list-none'>Leica Cine Home 1</li>
                    <li className='flex items-center justify-between'>The art of home cinema <img src='Logo/arrow.svg' alt='Arrow' className='w-6 h-6 ' /> </li>
                </div>
            </div>
        </div>
    </div>
  )
}
