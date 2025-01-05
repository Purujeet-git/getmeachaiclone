"use client"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
const Navbar = () => {
  
  export default function Component() {
    const { data: session } = useSession()
    if(session) {
      return <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    }

  return (
    <nav className='text-white flex justify-between items-center bg-blue-950 px-4 min-h-[8vh]'>
      <div className='logo font-bold text-xl flex justify-center items-center'><img className="" width="66"src='maker-happy-cup.gif'/><  span className='px-6'>GetMeAChai!</span></div>
      {/* <ul className='flex gap-9 justify-center items-start'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>SignUp</li>
        <li>Login</li>
      </ul> */}
      <div>
        <Link href={'/login'}>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              login
            </span>
          </button></Link>
      </div>
    </nav>
  )
}

export default Navbar
