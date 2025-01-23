import React from 'react'
import {chipImg} from '../utils'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


const Chip = () => {
    useGSAP(()=>{
        gsap.from('#chip', {
            scrollTrigger:{
                trigger:'#chip',
                start:'20% bottom',
            },
            opacity:0,
            scale:2,
            duration:2,
            ease:'power2.inOut'
        })
    },[])
  return (
    <section className='common-padding'>
        <div className='max-screen-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} alt='chip' width={180} hight={180}/>
            </div>
        </div>
    </section>
  )
}

export default Chip