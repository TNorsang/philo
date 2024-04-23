import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-28 items-center pt-8 pb-8 border-b-2 border-white bg-customOrange text-white rounded-lg text-2xl">
      <Link href="/">Home</Link>
      <Link href="/chat">Chat</Link>
    </nav>
  )
}
