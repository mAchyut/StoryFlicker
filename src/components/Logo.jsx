import React from 'react'
import websiteLogo from '../Images/websiteLogoPink.png'


function Logo({ width = '100px', height }) {
  return (
    <div> <img src={websiteLogo} alt="Logo" style={{width, borderRadius: '40%', height}} draggable={false}/></div>
  )
}

export default Logo




