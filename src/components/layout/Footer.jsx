import React from 'react'

function Footer() {
    const year= new Date().getFullYear();
  return (
    <footer className='footer p-5 bg-gray-700 text-primary-content footer-center '>
      <div>
      <p>Copyright:&copy; {year} All Rights Reserved</p>
      </div>
    
    </footer>
  )
}

export default Footer