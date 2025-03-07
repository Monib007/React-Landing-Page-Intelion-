import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faBrain, faPlug, faLock, faChartLine, faCogs, faMobileAlt, faUserShield, faDatabase } from "@fortawesome/free-solid-svg-icons";
// import { faLock, faChartLine, faCogs } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="p-10 px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl font-semibold text-center">Our Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer flex flex-col items-center text-center transition transform hover:scale-105">
            <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Blockchain Integration</h3>
            <p className="mt-2">Secure and scalable blockchain solutions tailored for financial institutions.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer flex flex-col items-center text-center transition transform hover:scale-105">
            <FontAwesomeIcon icon={faBrain} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">AI-Powered Analytics</h3>
            <p className="mt-2">Leverage AI and machine learning for smarter financial decision-making.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer flex flex-col items-center text-center transition transform hover:scale-105">
            <FontAwesomeIcon icon={faPlug} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Seamless API Integration</h3>
            <p className="mt-2">Easily connect with existing financial infrastructure using our robust APIs.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer flex flex-col items-center text-center transition transform hover:scale-105">
            <FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Mobile Banking</h3>
            <p className="mt-2">Next-gen mobile solutions for seamless financial transactions on the go.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer flex flex-col items-center text-center transition transform hover:scale-105">
            <FontAwesomeIcon icon={faUserShield} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Fraud Prevention</h3>
            <p className="mt-2">Advanced security protocols to protect against fraud and cyber threats.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer flex flex-col items-center text-center transition transform hover:scale-105">
            <FontAwesomeIcon icon={faDatabase} className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Big Data Management</h3>
            <p className="mt-2">Efficiently handle large financial datasets with cutting-edge technology.</p>
          </div>
        </div>
      </section>
  )
}

export default Features