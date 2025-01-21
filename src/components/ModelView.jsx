import React, { Suspense } from 'react'
import { PerspectiveCamera, View } from '@react-three/drei'
import Lights from './Lights'
import Iphone from './Iphone'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, item, size}) => {
  return (
    <View index={index} id={gsapType} className={`w-full h-full ${index === 2} ? 'right-[-100%] : '`}>
      {/* ambient light */}
      <ambientLight/>
      <PerspectiveCamera makeDefault position={[0, 0, 4]}/>

      <Lights/>
      <OrbitControls/>
      <group ref={groupRef} name={`${index === 1} ? 'small' : 'Large' `}>
          
      </group>
     
    </View>
  )
}

export default ModelView
