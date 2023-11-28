import React from 'react'
import flower from '../assets/titleFlower.png'
import { PiFlowerTulipDuotone } from "react-icons/pi";

function SecondaryTitle({text}) {
  return (
    <div className='secondary-title'>
      {/* <img height={80} src={flower} alt="" /> */}
      <PiFlowerTulipDuotone />
      <h3>{text}</h3>
    </div>
  )
}

export default SecondaryTitle
