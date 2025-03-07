import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-16 px-8 md:px-16 lg:px-24">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>

      <h2 className="text-4xl font-extrabold animate-fade-in">
        Transform Your Financial Future
      </h2>
      <p className="mt-4 max-w-xl mx-auto text-lg opacity-90 animate-slide-in">
        Partner with Intelion to leverage cutting-edge fintech solutions
        designed for scalability and security.
      </p>

      <button className="mt-6 px-8 py-3 bg-white text-yellow-600 rounded-lg font-semibold shadow-lg transition-all transform hover:bg-gray-200 hover:scale-105 animate-bounce cursor-pointer">
        <FontAwesomeIcon icon={faRocket} className="mr-2 text-yellow-600" />
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;
