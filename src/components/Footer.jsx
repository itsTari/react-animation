import React from 'react'
import {footerLinks} from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-6'>
        <div className='screen-max-width '>
            <div>
                <p className='text-gray font-bold'>More ways to shop:
                <span className='underline text-blue'> find a Apple store </span> {''} or <span className='underline text-blue'>other retailer</span> near you </p>
                <p className='text-gray font-bold'>Or call:
                <span className='underline text-blue'> +234 81076654 </span> {''} or <span className='underline text-blue'>+234 90632136</span> </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[2px] w-full '/>
            <div className='flex flex-col items-center md:flex-row gap-4  justify-between'>
              <p className='font-semibold text-grey text-xs'>&copy; @{new Date().getFullYear()} apple inc. all right reserved </p>
              <div className='flex justify-center  '>
                  {footerLinks.map((item)=>(
                    <div key={item.id} className='flex'>
                        <li className='list-none text-gray text-xs  md:text-[16px] md:font-bold  border-r border-gray  lg:mx-2 px-1' > {item}</li>
                    </div>
                    
                  ))}
              </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer