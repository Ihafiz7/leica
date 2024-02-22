import React from 'react'
import { Social } from '../Components/Social'

export const Section6 = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#1a1818]'>
        <div className='flex items-center justify-between w-5/6 mt-12 '>
            <div className='felx flex-col items-start'>
                <hr className='w-12 h-1 bg-gray-400'/>
                <p className='font-bold text-4xl text-gray-400'>Leica. Das Wesentilene</p>
            </div>
            <p className='font-normal text-base text-gray-400'>English International</p>
        </div>
        <div>
            <div className='flex sm:flex-col md:flex-col xl:flex-row sm:gap-8 md:gap-24 gap-24 items-baseline'>
                <div className='flex items-start sm:gap-6 md:gap-24 gap-24 mt-10 font-corpS'>
                    <ul className='flex flex-col items-start gap-4'>
                        <li className='ul'>Support</li>
                        <li className='li className="li"'>Contact</li>
                        <li className="li">Leica Account</li>
                        <li className="li">Newsletter</li>
                    </ul>
                    <ul className=' flex flex-col items-start gap-4'>
                        <li className="ul">Company</li>
                        <li className="li">Leica Camera</li>
                        <li className="li">Press Center</li>
                        <li className="li">Career</li>
                    </ul>
                    <ul className=' flex flex-col items-start gap-4'>
                        <li className="ul">Affiliates</li>
                        <li className="li">Litzs Cine</li>
                        <li className="li">Siner Photography</li>
                        <li className="li">Litzs Park</li>
                    </ul>
                    <ul className=' flex flex-col items-start gap-4'>
                        <li className="ul">Blog</li>
                        <li className="li">Leica Blog</li>
                        <li className="li">Hunting Blog</li>
                        <li className="li">Nature Blog</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <div className='flex flex-col gap-4 items-start'>
                        <p className='ul'>Leica Photography</p>
                        <Social />
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <p className='ul'>Leica Hunting</p>
                        <Social />
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <p className='ul'>Leica Nuture & Birding</p>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10'>
            <hr className='w-[90vw] h-[2px] bg-gray-400' />
            <div className='flex items-center justify-between p-4'>
                <ul className='flex items-center sm:flex-wrap md:flex-wrap xl:flex-nowrap gap-4'>
                    <li className='li'>Imprint </li>
                    <li className='li'>Data Protection</li>
                    <li className='li'>Legal Notices</li>
                    <li className='li'>Warranty</li>
                    <li className='li'>Cookie Settings</li>
                    <li className='li'>Cookies</li>
                    <li className='li'>Copyright © 2024 Leica Camera AG</li>
                </ul>
                <img src='Logo/logo.svg' alt='Leica' className='w-10 h-10' />
            </div>
        </div>
    </div>
  )
}
