import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-10 px-8 md:px-16 lg:px-24 mt-10 "> 
        <div className="flex justify-center gap-6 mt-4 text-gray-400">
          <p>R-7 Street, Yamuna Nagar, Haryana 135001</p>
          <p>T: 0612-2500-971 | E: connect@finolity.com</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
          <a href="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faGithub} /> Github</a>
          <a href="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
          <a href="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          <a href="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faGoogle} /> Brandfetch</a>
        </div>
        <p className="mt-4 text-gray-400">© 2025 Finolity</p>
        <div className="flex justify-center gap-4 mt-2 text-gray-400 flex-wrap">
          <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Refund and Cancellation Policy</a>
          <a href="#" className="hover:text-blue-400">Blog</a>
          <a href="#" className="hover:text-blue-400">Case Studies</a>
          <a href="#" className="hover:text-blue-400">Events</a>
          <a href="#" className="hover:text-blue-400">FAQ</a>
        </div>
      </footer>
  )
}

export default Footer