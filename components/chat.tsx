'use client'

import React, { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area' // Make sure this is forwarding ref if custom
import { useChat } from 'ai/react'
import Button from '@/components/ui/button'
import { FaceSmileIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Chat() {
  const ref = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat()
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
    <section className="relative text-sinc-700 h-screen w-screen flex justify-center items-center">
      <div className="w-11/12 mx-auto">
        <div
          ref={ref}
          className="overflow-y-auto h-md w-full rounded-md border"
        >
          {error && <div className="text-sm ">{error.message}</div>}
          {messages.map((m, index) => (
            <div key={index} className="whitespace-pre-wrap p-2">
              {m.role === 'user' ? (
                <span className="flex justify-end items-center">
                  <span className="text-white mr-2 border bg-blue-500 p-2 rounded-lg">
                    {m.content}
                  </span>
                  (You)
                  <UserIcon className="min-w-6 h-6 w-6 ml-2" />
                </span>
              ) : (
                <span className="flex items-center">
                  <FaceSmileIcon className="min-w-6 h-6 w-6 mr-2" />
                  (Philo)
                  <span className="text-white ml-2 bg-gray-400 p-2 rounded-lg">
                    {m.content}
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="relative mt-4">
          <textarea
            className="w-full p-2 mb-8 border border-gray-100 rounded shadow-xl resize-none"
            value={input}
            placeholder="Type your message here..."
            onChange={handleInputChange}
            rows={2}
            style={{
              width: '100%',
              paddingRight: '10%', // Note the camelCase and string value
              boxSizing: 'border-box', // camelCase for CSS property
            }}
          ></textarea>

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
