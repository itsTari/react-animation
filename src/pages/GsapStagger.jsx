import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
    useGSAP(()=>{
        gsap.to('.stagger-box',{y:250, duration:2, rotation:360, borderRadius:50, repeat:-1, yoyo:true, 
          // stagger:0.5,
          stagger:{
            amount:1.5, grid:[2,1], axis:'y', ease:'circ.inout', from:'center'
          }
        })
      })
  return (
    <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
  )
}

export default GsapStagger
