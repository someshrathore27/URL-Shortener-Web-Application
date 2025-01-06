import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main container */}
      <div className="flex-1 px-4 sm:px-8 py-2 mt-16"> 
        {/* mt-16 gives breathing space below navbar */}
        
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          URL Shortener Dashboard
        </h1>

        {/* URL form card */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Create a New Short URL
          </h2>
          <UrlForm />
        </div>

        {/* User URLs table section */}
        <div className="bg-white p-6 rounded-xl shadow-md w-full">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Your Shortened URLs
          </h2>
          <UserUrl />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
