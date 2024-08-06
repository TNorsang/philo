'use client'

import React, { useEffect, useRef } from 'react'
import { useChat } from 'ai/react'
import Button from '@/components/ui/button'

export default function Chat() {
  const ref = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat()

  useEffect(() => {
    if (ref.current === null) return
    ref.current.scrollTo(0, ref.current.scrollHeight)
  }, [messages])

  const handleEnterKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      const syntheticEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
      })
      event.currentTarget.form?.dispatchEvent(syntheticEvent)
    }
  }

  return (
    <section className="flex flex-col h-screen background">
      <div className="flex-grow overflow-hidden pt-20">
        <div
          ref={ref}
          className="relative top-[15%] h-3/4 overflow-y-auto bg-gray-300 bg-opacity-50 p-4 "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {error && (
            <div className="text-sm text-red-500 mb-4">{error.message}</div>
          )}
          {messages.map((m, index) => (
            <div
              key={index}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-4 `}
            >
              {m.role === 'user' ? (
                <>
                  <div className="text-white bg-blue-500 p-4 rounded-2xl text-16px max-w-[80%] ">
                    {m.content}
                  </div>
                  <div className="text-white text-16px font-medium ml-2 self-end flex  py-4">
                    (You)
                  </div>
                </>
              ) : (
                <>
                  <div className="text-white text-16px font-medium mr-2 self-end py-4">
                    (Philo)
                  </div>
                  <div className="text-white bg-customOrange p-4 rounded-2xl text-16px max-w-[80%]">
                    {m.content}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 pb-20 flex justify-center">
        <form onSubmit={handleSubmit} className="flex items-end w-3/4">
          <textarea
            className="flex-grow border-2 p-5 pl-10 pr-12 rounded-2xl shadow-md resize-none"
            value={input}
            placeholder=""
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyDown}
            rows={2}
          />
          <Button
            children={{
              className: 'relative top-[-26px] left-[-40px]',
              type: 'submit',
              disabled: isLoading,
            }}
          />
        </form>
      </div>
    </section>
  )
}
