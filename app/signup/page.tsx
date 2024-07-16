'use client'

import React, { useState, useEffect } from 'react'

export default function SignUp() {
  const [user, setUser] = useState({})
  const [signedIn, setSignedIn] = useState(false)
  return (
    <div className="flex justify-center items-center min-h-screen bg-opacity-50">
      <div className="flex flex-col items-center gap-4 bg-opacity-50 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <input
          className="w-full h-[56px] p-2 mb-4 rounded-full border-4 shadow-xl text-[16px]"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full h-[56px] p-2 mb-4 rounded-full border-4 shadow-xl text-[16px]"
          type="password"
          placeholder="Password"
        />
        <button className="w-full h-[48px] bg-blue-500 text-white rounded-2xl text-[16px] shadow-xl">
          Sign Up
        </button>
      </div>
    </div>
  )
}
