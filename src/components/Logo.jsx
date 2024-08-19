import React from 'react'
import websiteLogo from '../Images/websiteLogo.png'


function Logo({ width = '100px' }) {
  return (
    <div> <img src={websiteLogo} alt="Logo" style={{width, borderRadius: '45%'}} /></div>
  )
}

export default Logo




