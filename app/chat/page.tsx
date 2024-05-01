'use client'

import React, { useEffect, useRef } from 'react'
import { useChat } from 'ai/react'
import Button from '@/components/ui/button'
import { FaceSmileIcon, UserIcon } from '@heroicons/react/24/outline'
import RobotSVG from '@/components/ui/robot'

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
    <section>
      <div>
        <div
          ref={ref}
          className="w-screen h-[456] overflow-y-auto p-2 bg-gray-300 bg-opacity-50 absolute top-[144]"
        >
          {error && <div className="text-sm ">{error.message}</div>}
          {messages.map((m, index) => (
            <div key={index} className="whitespace-pre-wrap p-2">
              {m.role === 'user' ? (
                <span className="flex justify-end items-center">
                  <span className="text-white mr-2 bg-blue-500 p-2 rounded-2xl">
                    {m.content}
                  </span>
                  <span className="text-white">(You)</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="text-white">(Philo)</span>
                  <span className="text-white ml-2 bg-gray-400 p-2 rounded-2xl">
                    {m.content}
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="">
          <Button
            children={{
              className: 'mt-2 absolute top-[528] right-[72]',
              type: 'submit',
              disabled: isLoading,
            }}
          />
          <textarea
            className="absolute w-[334] h-[56] top-[522] ml-[48] border p-2 mb-8 rounded-full shadow-xl resize-none"
            value={input}
            placeholder="Let's Talk!"
            onChange={handleInputChange}
            rows={2}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: '5%',
            }}
          ></textarea>
        </form>
      </div>
    </section>
  )
}
