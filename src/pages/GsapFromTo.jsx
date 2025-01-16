import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
    useGSAP(()=>{
        gsap.fromTo('#red-box', {
          x:0,
          borderRadius:0,
          rotation:0,
        },{
          rotation:350, x:250, repeat:-1, yoyo:true, duration:2, ease:'bounce.out', borderRadius:50
        })
      },[])
  return (
    <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
  )
}

export default GsapFromTo
