'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { useChat } from 'ai/react'
import { useEffect, useRef } from 'react'
import Button from '@/components/ui/button'

export default function Chat() {
  const ref = useRef<HTMLDivElement>(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat()

  useEffect(() => {
    if (ref.current === null)
      return ref.current.scrollTo(0, ref.current.scrollHeight)
  }, [messages])
  return (
    <section className="relative text-sinc-700 h-screen flex justify-center items-end">
      <div className="w-screen max-w-md">
        <ScrollArea className="h-80 overflow-y-auto" ref={ref}>
          {error && <div className="text-sm text-red-400">{error.message}</div>}
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? (
                <>
                  <span>User: </span>
                  <div className="mt-1.5 text-sm">{m.content}</div>
                </>
              ) : (
                <>
                  <span>AI: </span>
                  <div className="mt-1.5 text-sm">{m.content}</div>
                </>
              )}
            </div>
          ))}
        </ScrollArea>

        <form onSubmit={handleSubmit} className="relative mt-4">
          <input
            className="w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder=""
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
