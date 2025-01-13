import Image from "next/image"


export default function Header() {
  return (
    <div className="sticky z-20 flex justify-around items-center p-2 text-white   ">
        
        <div className="flex gap-1 items-center">
            <Image
            src={'/assets/logo.png'}
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
            />
            <div className="text-2xl font-bold ">AISPIRE</div> 
      </div>

      <div>
        <nav>
            <ul className='flex gap-4 items-center'>
                <li className=" text-2xl ">Home</li>
                <li className="text-2xl ">About Us</li>
                <li className="text-2xl ">Gallery</li>
                <button className="bg-white text-gray-900 rounded-xl p-2 font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">Join now</button>
            </ul>
        </nav>
      </div>
    </div>
  )
}

