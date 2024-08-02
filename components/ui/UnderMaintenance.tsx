'use client'

import { useEffect, useState } from 'react'

export default function UnderMaintenance() {
  const [message, setMessage] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMessage(true)
      } else {
        setMessage(false)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="fixed bottom-0 w-full">
      {message ? (
        <h1 className="text-white text-[18px] font-semibold absolute w-full bottom-0 flex justify-center items-center underline">
          Site Under Maintenance: Some features are currently unavailable.
        </h1>
      ) : (
        <h1 className="text-white text-[18px] font-semibold absolute w-full bottom-0 flex justify-center items-center underline">
          Under Maintenance!
        </h1>
      )}
    </div>
  )
}
