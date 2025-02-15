import Navbar from '@/Components/Bars/Navbar'
import Footer from '@/Components/HomePage_components/Footer'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img src="/img/404.svg" alt="404 Not Found" className="w-1/2 mb-8" />
        <p className="text-xl text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Go to Homepage
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound