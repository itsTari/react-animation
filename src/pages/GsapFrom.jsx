import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
    useGSAP(()=>{
        gsap.from('#green-box',{rotation:350, x:250, repeat:-1, yoyo:true, duration:2, ease:'power1.inOut'})
      },[]);
  return (
    <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
  )
}

export default GsapFrom
