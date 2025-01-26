import React from 'react'
import {footerLinks} from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width '>
            <div>
                <p className='text-gray font-bold'>More ways to shop:
                <span className='underline text-blue'> find a Apple store </span> {''} or <span className='underline text-blue'>other retailer</span> near you </p>
                <p className='text-gray font-bold'>Or call:
                <span className='underline text-blue'> +234 81076654 </span> {''} or <span className='underline text-blue'>+234 90632136</span> </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[2px] w-full '/>
            <div className='flex md:flex-row sm:flex-col md:items-center justify-between'>
              <p className='font-semibold text-grey text-xs'>copyright @2025 apple inc. all right reserved </p>
              <div className='flex'>
                  {footerLinks.map((item)=>(
                    <li className='list-none text-gray font-bold' key={item.id}> {item} {' '} {item !== footerLinks.length-1 && (<span className='mx-2'> | </span>)}</li>
                  ))}
              </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer