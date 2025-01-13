import Image from "next/image"

export default function Header({ aboutUsRef, galleryRef }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 
                     backdrop-blur-md bg-gray-900/70
                     border-b border-gray-800/50
                     shadow-lg shadow-black/20
                     transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
        <div className="flex gap-2 items-center">
          <Image
            src={'/assets/logo.png'}
            width={40}
            height={40}
            className="rounded-full"
            alt="logo"
          />
          <div className="text-xl font-bold text-white">AISPIRE</div> 
        </div>

        <nav>
          <ul className='flex gap-4 items-center'>
            <li className="text-lg text-white hover:text-gray-300 transition-colors cursor-pointer">
              <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
            </li>
            <li className="text-lg cursor-pointer text-white hover:text-gray-300 transition-colors">
              <a onClick={() => aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })}>About Us</a>
            </li>
            <li className="text-lg cursor-pointer text-white hover:text-gray-300 transition-colors">
              <a onClick={() => galleryRef.current?.scrollIntoView({ behavior: 'smooth' })}>Gallery</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}