'use client'

import React, { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area' // Make sure this is forwarding ref if custom
import { useChat } from 'ai/react'
import Button from '@/components/ui/button'
import { FaceSmileIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Chat() {
  const ref = useRef<HTMLDivElement>(null)
  const options = {
    append: {
      content: 'Answer me with 3 words only',
      role: 'user',
      createdAt: '2024-04-18T16:12:58.830Z',
      id: 'IYCFt22',
    },
  }

  const {
    messages,
    input,
    append,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useChat()
  // useEffect(() => {
  //   append({
  //     content: 'Answer me with 3 words only',
  //     role: 'user',
  //   })
  // }, [])
  useEffect(() => {
    // Automatically scroll to the bottom whenever the messages update
    console.log(messages)
    if (ref.current === null) return
    ref.current.scrollTo(0, ref.current.scrollHeight)
  }, [messages])

  return (
    <section className="relative text-sinc-700 h-screen w-screen flex justify-center items-end">
      <div className="w-screen max-w-4xl">
        <h1> Hello</h1>
        <div
          ref={ref}
          className="overflow-y-auto h-md w-full rounded-md border"
        >
          {error && <div className="text-sm text-red-400">{error.message}</div>}
          {messages.map((m, index) => (
            <div key={index} className="whitespace-pre-wrap p-2">
              {m.role === 'user' ? (
                <span className="flex items-start">
                  <UserIcon className="min-w-6 h-6 w-6" />
                  (You)<span className="text-blue-400"> {m.content}</span>
                </span>
              ) : (
                <span className="flex items-start">
                  <FaceSmileIcon className="min-w-6 h-6 w-6" />
                  (Philo)<span className="text-blue-400"> {m.content}</span>
                </span>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="relative mt-4">
          <input
            className="w-full p-2 mb-8 border border-gray-100 rounded shadow-xl"
            value={input}
            placeholder="Type your message here..."
            onChange={handleInputChange}
          />
          <Button
            children={{
              className: 'mt-2 absolute right-3',
              type: 'submit',
              disabled: isLoading,
            }}
          />
        </form>
      </div>
    </section>
  )
}
