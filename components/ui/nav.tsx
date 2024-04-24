import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-10 items-center pt-8 pb-8 border-b-2 border-white bg-customOrange text-white rounded-lg text-2xl sm:space-x-28">
      <Image
        className="bg-blend-multiply"
        src="/images/philo-logo.png"
        alt="Logo"
        width={50}
        height={50}
      />
      <Link className="home " href="/">
        Home
      </Link>
      <Link className="chat" href="/chat">
        Chat
      </Link>
    </nav>
  )
}
