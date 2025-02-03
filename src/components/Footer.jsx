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
            <div className='flex md:flex-row  md:items-center justify-between'>
              <p className='font-semibold text-grey text-xs w-[50%] sm:w-[25%]'>copyright @2025 apple inc. all right reserved </p>
              <div className='flex flex-col sm:flex-row md:flex-row'>
                  {footerLinks.map((item)=>(
                    // <div key={item.id} className='flex flex-col'>
                        <li className='list-none text-gray font-bold md:border-r sm:border-r border-gray md:mx-1 lg:mx-2 md:px-1' > {item}</li>
                    // </div>
                    
                  ))}
              </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer