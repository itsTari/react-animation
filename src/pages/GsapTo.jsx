import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(()=>{
    gsap.to('#blue-box',{rotation:350, x:250, repeat:-1, yoyo:true, duration:2, ease:'bounce.in'})
  },[]);

  return (
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
  );
};

export default GsapTo;