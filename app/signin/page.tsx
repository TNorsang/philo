'use client'

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-opacity-50">
      <div className="flex flex-col items-center gap-2 bg-opacity-50 bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <input
          className="w-5/12 rounded-full h-[56px] border-4 p-4 shadow-xl text-[16px] mb-4"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-5/12 h-[56px] p-4 mb-4 rounded-full border-4 shadow-xl text-[16px]"
          type="password"
          placeholder="Password"
        />
        <button className="w-5/12 h-[48px] bg-blue-500 text-white rounded-2xl text-[16px] shadow-xl">
          Sign In
        </button>
        <button className="w-5/12 h-[48px] bg-customOrange text-white rounded-2xl text-[16px] shadow-xl">
          Sign Up
        </button>
      </div>
    </div>
  )
}
