import Chat from '@/components/chat'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Chat />
    </main>
  )
}
