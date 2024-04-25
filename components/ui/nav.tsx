import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-10 items-center pt-8 pb-8 border-b-2 border-white bg-customOrange text-white rounded-lg text-2xl ">
      <ul className="inline-flex space-x-11 items-center justify-center sm:space-x-32">
        <li className="w-full">
          <Image
            className="rounded-full"
            src="/images/philo-logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </li>
        <li className="hover:bg-white hover:bg-opacity-20 focus:bg-white focus:bg-opacity-20">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-white hover:bg-opacity-20 focus:bg-white focus:bg-opacity-20">
          <Link href="/chat">Chat</Link>
        </li>
      </ul>
    </nav>
  )
}
