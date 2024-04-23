import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center bg-customBlue text-white border-2 border-cyan-200 rounded-lg space-x-3 p-3 text-2xl">
      <Link href="/">Home</Link>
      <Link href="/chat">Chat</Link>
    </nav>
  )
}
