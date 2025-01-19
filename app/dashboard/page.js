import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col'>
    <p className='font-bold text-white text-2xl py-8'>Welcome to your Dashboard</p>  
    <label className="block text-gray-600 text-sm font-bold mb-2" for="Name">
        Name
      </label>
      <input className="shadow appearance-none bg-slate-800 border-black border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Name"></input>
      <label className="block text-gray-600 text-sm font-bold mb-2" for="Email">
        Email
      </label>
      <input className="shadow appearance-none bg-slate-800 border-black border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"></input>
      <label className="block text-gray-600 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none bg-slate-800 border-black border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
      <label className="block text-gray-600 text-sm font-bold mb-2" for="Profile">
        Profile Picture
      </label>
      <input className="shadow appearance-none bg-slate-800 border-black border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Profile" type="text" placeholder="Profile Picture"></input>
      <label className="block text-gray-600 text-sm font-bold mb-2" for="Cover">
        Cover Picture
      </label>
      <input className="shadow appearance-none bg-slate-800 border-black border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Cover" type="text" placeholder="Cover Picture"></input>
      <label className="block text-gray-600 text-sm font-bold mb-2" for="Credentials">
        Razorpay Credentials
      </label>
      <input className="shadow appearance-none bg-slate-800 border-black border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Credentials" type="text" placeholder="Razorpay Credentials"></input>
      <button className="relative inline-flex items-center justify-center w-1/2 m-5  p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            SAVE
          </button>
    </div>
    </>
  )
}

export default Dashboard
