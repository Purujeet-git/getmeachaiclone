import React from 'react'

const Username = ({params}) => {
  return (
    <div className='text-white'>
      <div className='h-80 relative w-full'>
      <img className='object-cover h-full w-full' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/916803/03fcd0f42797434a862b85cbdbb87a34/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.jpeg?token-time=1738627200&token-hash=i5hh0vsxRdqqN8iRgorkrDLaTqlxAAFv5itwcVzxY70%3D' ></img>
      <div className='flex justify-center'>
      <img className="w-28 absolute bottom-[-50px]  rounded-xl" src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/916803/e8f24174eb0943608d4a036de4825036/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/9.jpg?token-time=1738281600&token-hash=eE6qj1eD5vogvAlWZk5ajzzodaV-wPNb7w3y83RzoLU%3D'></img>
      </div>
</div>
<div className='flex items-center p-20 flex-col'>
<div className='text-white text-3xl'>{params.username} </div>
<div className=''>is creating unnecessary problems for himself.</div>
<p className='text-slate-500 py-4'>538 Post</p>
<button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-14 py-2.5 text-center me-2  '>Join for free</button>
<div className='flex gap-2 p-3'>
<img src='instagram.svg' className='invert w-9'></img>
<img src='youtube.svg' className='invert w-9'></img>
</div>
</div>
<div className='flex gap-1 p-8'>
  <div className='bg-slate-900 w-1/2 p-4'>
  <p className='font-bold text-2xl'>Supporters</p>

  <ul className='p-2'>
  <li>Shubham Donated <span className='font-bold'>$40</span> with a message "I support you love bro. Lots of love ❤️"</li>
  <li>Shubham Donated <span className='font-bold'>$40</span> with a message "I support you love bro. Lots of love ❤️"</li>
  <li>Shubham Donated <span className='font-bold'>$40</span> with a message "I support you love bro. Lots of love ❤️"</li>
  <li>Shubham Donated <span className='font-bold'>$40</span> with a message "I support you love bro. Lots of love ❤️"</li>
  <li>Shubham Donated <span className='font-bold'>$40</span> with a message "I support you love bro. Lots of love ❤️"</li>
  </ul>
  </div>
  
  <div className='bg-slate-900 w-1/2 p-4'><p className='font-bold text-xl m-2'>Make a Payment</p>
  <input className="m-2 w-full bg-slate-950 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Name.."></input>
  <input className="m-2 w-full bg-slate-950 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Message"></input>
  <input className="m-2 w-full bg-slate-950 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Amount"></input>
  <button className='text-white w-full my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-14 py-2.5 text-center me-2  '>Pay now</button>
  <div className='flex gap-5'>
  <button className='bg-slate-600 rounded p-2'>$10</button>
  <button className='bg-slate-600 rounded p-2'>$10</button>
  <button className='bg-slate-600 rounded p-2'>$10</button>
  </div>
  </div>
</div>
    </div>
  )
}

export default Username
