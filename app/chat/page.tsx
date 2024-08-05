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
    if (event.key === 'Enter') {
      event.preventDefault()
      const syntheticEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
      })
      event.currentTarget.form?.dispatchEvent(syntheticEvent)
    }
  }

  return (
    <section className="relative last:flex flex-col justify-center items-center h-screen">
      <div className="absolute top-[0px] flex flex-col items-center">
        <div
          ref={ref}
          className="w-screen h-[472px] overflow-y-scroll overflow-x-hidden bg-gray-300 bg-opacity-50 relative top-[144px] flex flex-col items-center p-[16px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {error && <div className="text-sm">{error.message}</div>}
          {messages.map((m, index) => (
            <div key={index} className="">
              {m.role === 'user' ? (
                <span className="flex justify-end items-center w-screen pb-[16px]">
                  <span className="text-white mr-[8px] bg-blue-500 p-[16px] rounded-2xl text-[16px]">
                    {m.content}
                  </span>
                  <span className="text-white pr-[8px] text-[16px] font-medium mr-[16px]">
                    (You)
                  </span>
                </span>
              ) : (
                <span className="flex items-center w-screen pl-[16px] pb-[16px]">
                  <span className="text-white text-[16px] font-medium">
                    (Philo)
                  </span>
                  <span className="text-white ml-[8px] bg-customOrange p-[16px] rounded-2xl text-[16px] mr-[16px]">
                    {m.content}
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[334px] h-[56px] absolute top-[64%]"
      >
        <textarea
          className="relative w-[334px] h-[56px] top-[15px] border-4 p-2 mb-8 rounded-full shadow-xl resize-none overflow-y-hidden"
          value={input}
          placeholder="Say Something to Philo :)"
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyDown}
          rows={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: '5%',
            paddingLeft: '4%',
            paddingTop: 'calc(6% - 0.5em)',
          }}
        ></textarea>
        <Button
          children={{
            className: 'relative top-[-55px] left-[292px]',
            type: 'submit',
            disabled: isLoading,
          }}
        />
      </form>
    </section>
  )
}
