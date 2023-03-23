import React from 'react'

import {moryzone} from '../assets/images'

const CurrentJob = () => {
  return (
    <div >
      <img src={moryzone} className="w-[100%] rounded-xl " alt="" />
      <div className="glassmorphism" style={`glassmorphism`}>
          <p className="absolute top-0 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quis maxime ratione praesentium, at dolor id placeat iusto ducimus voluptatum pariatur, reiciendis ut a laboriosam nisi consequatur temporibus impedit enim?</p>
      </div>
    </div>
  )
}

export default CurrentJob