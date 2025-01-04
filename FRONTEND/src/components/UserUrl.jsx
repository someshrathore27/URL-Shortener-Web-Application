import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllUserUrls } from '../api/user.api'
import { QRCodeCanvas } from 'qrcode.react'  // 👈 new import

const UserUrl = () => {
  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
    refetchInterval: 30000, // auto-refresh clicks
    staleTime: 0,
  })

  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
        Error loading your URLs: {error.message}
      </div>
    )
  }

  if (!urls.urls || urls.urls.length === 0) {
    return (
      <div className="text-center text-gray-500 my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <p className="text-lg font-medium">No URLs found</p>
        <p className="mt-1">You haven't created any shortened URLs yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg mt-5 shadow-md overflow-hidden">
      <div className="overflow-x-auto h-72">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Original URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Short URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Clicks</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">QR</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {urls.urls.reverse().map((url) => {
              const shortUrl = `http://localhost:3000/${url.short_url}`
              return (
                <tr key={url._id} className="hover:bg-gray-50">
                  {/* Full URL */}
                  <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-xs">{url.full_url}</td>

                  {/* Short URL */}
                  <td className="px-6 py-4 text-sm">
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-900 hover:underline">
                      {shortUrl}
                    </a>
                  </td>

                  {/* Clicks */}
                  <td className="px-4 py-4 flex items-center justify-center">
                    <span className="px-3 flex text-center text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
                    </span>
                  </td>

                  {/* Created Date */}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {url.createdAt ? new Date(url.createdAt).toLocaleDateString() : "-"}
                  </td>

                  {/* QR Code */}
                  <td className="px-6 py-4">
                    <QRCodeCanvas value={shortUrl} size={50} />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-sm font-medium">
                    <button
                      onClick={() => handleCopy(shortUrl, url._id)}
                      className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md shadow-sm transition-colors ${
                        copiedId === url._id
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {copiedId === url._id ? 'Copied!' : 'Copy URL'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserUrl
