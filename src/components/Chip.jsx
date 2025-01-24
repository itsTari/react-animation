import React, {useRef} from 'react'
import {chipImg, frameImg, frameVideo} from '../utils'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {animateWithGsap} from '../utils/animations'


const Chip = () => {
    const videoRef = useRef()
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
        animateWithGsap('.g-fadein', {
            opacity:1,
            y:0,
            duration:1,
            ease:'power2.inOut'
        })
    },[])
  return (
    <section className='common-padding'>
        <div className='max-screen-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} alt='chip' width={180} hight={180}/>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='chip-title'>
                    A17 Pro Chip
                    <br/>
                    A monster win for gaming.
                </h2>
                <p className='chip-subtitle'>
                    it's here. The biggest redesign in the history of Apple GPUs.
                </p>
            </div>
            <div className='mt-5 md:mt-20 mb-14'>
                <div className='relative h-full flex-center '>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt='frame image' className='bg-transparent relative z-10'/>
                    </div>
                    <div className='chip-video absolute '>
                            <video playsInline muted preload='none' autoPlay className='pointer-events-none' ref={videoRef}   >
                                <source src={frameVideo} type='video/mp4'/>
                            </video>
                        </div>
                </div>
                <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>
            </div>
                        <div className="chip-text-container">
                                <div className="flex flex-1 justify-center flex-col">
                                    <p className="chip-text g-fadein">A17 pro is an entirely new class of iphone class that delivers our {''}  
                                        <span className="text-white">Best graphic performance by far.</span>
                                    </p>
                                    <p className="chip-text g-fadein pt-2">Mobile{''}  
                                        <span className="text-white">games will look and feel so immersive</span> with incredibly detailed enviroments and characters.
                                    </p>
                                </div>
                                
                                
                         <div className='flex flex-1 justify-center flex-col g-fadein'>
                                <p className='chip-text'>New</p>
                                <p className='chip-bigtext'>Pro class GPU.</p>
                                <p className='chip-text'>with 6 cores</p>
                         </div>
                        </div>
            
        </div>
    </section>
  )
}

export default Chip