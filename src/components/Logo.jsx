import React from 'react'
import websiteLogo from '../Images/websiteLogo.jpg'


function Logo({ width = '100px' }) {
  return (
    <div> <img src={websiteLogo} alt="Logo" style={{width, borderRadius: '40%'}} /></div>
  )
}

export default Logo




