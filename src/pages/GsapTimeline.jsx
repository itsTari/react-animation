import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
    const timeline = gsap.timeline({
        repeat:-1, repeatDelay:1
      })
      useGSAP(()=>{
        timeline.to('#yellow-box', {x:250, rotation:360, duration:2, borderRadius:50, ease:'back.inOut'})
        timeline.to('#yellow-box', {y:250, scale:2, rotation:360, duration:2, ease:'back.inOut' })
        timeline.to('#yellow-box', {x:500, scale:1, rotation:360, duration:2, borderRadius:10, ease:'back.inOut'})
      })
    
      
  return (
    <div className="mt-20 space-y-10">
        <button onClick={() => {
          if(timeline.paused()){
            timeline.play()
          }else{
            timeline.pause()
          }
        }}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
  )
}

export default GsapTimeline
