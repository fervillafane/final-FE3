import React from 'react'
import DH from '../img/DH.png'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={DH} alt='DH-logo' width={250} />
        <div>
          <img src="../img/ico-facebook.png" alt="facebook" />
        </div>
    </footer>
  )
}

export default Footer
