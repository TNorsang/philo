'use client';
 
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from 'ai/react';
import Button from '@/components/ui/button'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  return (
    <section className='text-sinc-700'>

    <div className="container flex h-screen flex-col items-center justify-center">
     <div className='mt-4 w-full max-w-lg'>
     <ScrollArea>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
      </ScrollArea>
      {console.log(messages.content)}
 
      <form onSubmit={handleSubmit}>
        <input
          className="absolute bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder=""
          onChange={handleInputChange}
        /> 
        <span className="absolute bottom-8 right-20">
            <Button 
                type='submit'
                variant='secondary'
                disabled={isLoading}
                />
        </span>
        {console.log(" After Message " + messages.content)}
      </form>
      </div>
    </div>
    </section>

  );
}