import React from 'react'
import prizeData from '../Components/prizeData'

export const Section4 = () => {
  return (
    <div className='flex sm:flex-col md:flex-col xl:flex-row lg:flex-row items-center  px-32 py-12'>
        <div className='relative sm:w-[400px] md:w-[650px] w-[650px] h-[400px]'>
            <img src='Logo/p4i1.jpg' alt='BEE_man' loading='lazy' className='w-full h-full object-contain brightness-75' />
            <div className='absolute left-[40px] sm:bottom-[80px] md:bottom-[20px] xl:bottom-[80px] lg:bottom-[20px] font-corpS'>
                <p className='font-semibold text-lg text-gray-700'>Leica Gallery Franckfoot </p>
                <p className='font-bold text-xl text-stone-200'>Leica oskar Bernak Award 2023</p>
                <p className='flex items-center justify-between font-semibold text-stone-200'>24/02/24 - 16/03/2024 <img src='Logo/arrow.svg' alt='Arrow' className='w-6 h-6 ' /></p>
            </div>
        </div>
        <div className='flex sm:ml-8 md:ml-0 '>
            <div className='flex flex-col sm:gap-8 md:gap-8 xl:gap-4 lg:gap-8 items-end ml-[-40px] z-[2] sm:mt-0 md:mt-4 xl:mt-12 lg:mt-12'>
                {prizeData.map((item, index) => (
                    <div key={index} className='flex flex-col w-[400px] xl:h-[75px] lg:h-[100px] rounded shadow-lg sm:px-8 sm:py-4 md:px-8 md:py-4 xl:px-2 xl:py-1 lg:px-8 lg:py-4 bg-white'>
                        <p className='xl:font-normal lg:font-semibold xl:text-sm lg:text-base text-gray-400'>{item.add}</p>
                        <p className='font-bold xl:yexy-base lg:text-lg text-black'>{item.name}</p>
                        <p className='flex items-center justify-between font-semibold text-black'>{item.date} <img src='Logo/arrow.svg' alt='Arrow' className='w-6 h-6 ' /></p>
                    </div>
                ))} 
                <button className='w-28 h-8 bg-transparent border-[1px] border-solid border-black rounded-full text-lg font-semibold'>See More</button>
            </div>      
        </div>
    </div>

  )
}
