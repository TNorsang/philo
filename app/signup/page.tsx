'use client'

import { useState } from 'react'

export default function SignUp() {
  const [user, setUser] = useState({ username: '', email: '', password: '' })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }

  const handleSignUp = async () => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      if (res.ok) {
        alert('User Created Successfully!')
      } else {
        alert('Error Creating User!')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error Creating User!')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-opacity-50">
      <div className="flex flex-col items-center gap-4 bg-opacity-50 bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <input
          className="w-5/12 rounded-full h-[56px] border-4 p-4 shadow-xl text-[16px] mb-4"
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleInput}
        />
        <input
          className="w-5/12 h-[56px] p-4 mb-4 rounded-full border-4 shadow-xl text-[16px]"
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          className="w-5/12 h-[56px] p-4 mb-4 rounded-full border-4 shadow-xl text-[16px]"
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleInput}
        />
        <button
          className="w-5/12 h-[48px] bg-blue-500 text-white rounded-2xl text-[16px] shadow-xl"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <button className="w-5/12 h-[48px] bg-customOrange text-white rounded-2xl text-[16px] shadow-xl">
          Sign In
        </button>
      </div>
    </div>
  )
}
