import React from 'react'

const Header = () => {

  return (
    <div className='fixed w-11/12 z-10 mt-4  flex items-center justify-between py-4 rounded-2xl bg-[rgba(20,20,20,0.85)]'>
      <div className='pl-12'>
        <img src='Logo/logo.svg' alt='Leica Logo' className='w-14 h-14 object-contain' />
      </div>
      <div className='flex items-center gap-2 pr-4'>
        <img src='Logo/search.svg' alt='Icon_Search' className='w-8 h-8 cursor-pointer'/>
        <img src='Logo/menu.svg' alt='Icon_Menu' className='w-8 h-8 cursor-pointer' />
      </div>
    </div>
  )
}

export default Header