// src/components/icons/Socials.jsx
import React from 'react'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'


const Socials = () => {
  return (
    <div className="w-full px-4 mb-8 mx-auto text-center">
    <ul className="flex justify-center gap-4">
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={Facebook} alt="Facebook" className="w-10 h-10" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={Linkedin} alt="Linkedin" className="w-10 h-10" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={Twitter} alt="Twitter" className="w-10 h-10" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={Instagram} alt="Instagram" className="w-10 h-10" />
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Socials
