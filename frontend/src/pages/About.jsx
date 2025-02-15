import React from 'react';
import Navbar from '../Components/Bars/Navbar';
import Footer from '../Components/HomePage_components/Footer';

const About = () => {
  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
          Welcome to <span className="text-purple-600">Rama Realm</span> – The Future of E-Learning with VR
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At Rama Realm, we believe education should be immersive, interactive, and accessible to everyone. Our platform blends cutting-edge Virtual Reality (VR) technology with innovative e-learning methods to create an engaging learning experience like never before.
        </p>
        <div className="bg-white rounded-lg shadow-xl p-8 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 Why Rama Realm?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span>
                <strong>Immersive Learning:</strong> Step into a virtual world where concepts come to life.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span>
                <strong>Interactive Courses:</strong> Learn by doing, not just watching.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span>
                <strong>Future-Ready Education:</strong> Experience education in a way that prepares you for the tech-driven world.
              </span>
            </li>
          </ul>
        </div>
        <p className="mt-8 text-lg text-gray-700">
          Join us in revolutionizing education—where learning isn’t just a task, but an adventure! 🌍🔮
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;