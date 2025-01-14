'use client'

import Header from '@/components/Header'
import { useState } from 'react';
import Gallery from '@/components/Gallery';
import { useRef } from 'react';


export default function Home() {
  const [action, setAction] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const images = ['hackathon','hackathon2','hack1','bg1']
  const joinNowRef = useRef()
  const galleryRef = useRef()
  const aboutUsRef = useRef();
  return (
   <div className="min-h-screen overflow-x-hidden">


  <main className="relative w-full">

          <section className="relative min-h-screen bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/50" /> 
            <Header
            aboutUsRef={aboutUsRef}
            galleryRef={galleryRef}
            />
            <div className='relative z-10 container mx-auto px-4 flex flex-col gap-8 pt-[190px] text-center'>
              <h1 className='font-extrabold  text-4xl md:text-6xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
                Welcome to AISPIRE - The Future of AI
              </h1>
              <p className='font-medium text-xl md:text-2xl max-w-3xl mx-auto text-gray-200'>
                Unlock the potential of artificial intelligence. Innovate, collaborate, and shape the future with like-minded pioneers
              </p>
              <div>
                <button className='bg-white text-gray-900 rounded-xl px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105'
                onClick={()=>{
                  joinNowRef.current?.scrollIntoView({
                    behavior:'smooth'
                  })
                }}
                >
                  Join Us Now
                </button>
              </div>
            </div>
          </section>


          <section className="container mx-auto px-4 py-24 relative min-h-screen" ref={aboutUsRef}>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold 
                            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                            bg-clip-text text-transparent
                            animate-gradient
                            tracking-tight">
                About Us
              </h2>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed
                            backdrop-blur-sm bg-gray-900/30 
                            rounded-2xl p-8
                            border border-gray-700/50
                            shadow-lg
                            
                            hover:scale-105 transition-all duration-300">
                At AISPIRE, We are a passionate community of AI enthusiasts, developers, and researchers. 
                Whether you're a beginner or an expert, there's a place for you to learn, collaborate, 
                and innovate. From workshops to hands-on projects, our members push the boundaries of 
                what's possible with AI. Join us now and be at the forefront of shaping the future of technology!
              </p>
            </div>
          </section>


        <section className='container mx-auto px-4 py-24 relative  min-h-screen' ref={joinNowRef}>
            {/* Title */}
            <div className="text-center mb-24 relative">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold 
                            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                            bg-clip-text text-transparent
                            animate-gradient
                            tracking-tight
                            px-4">
                Become a part of the AI revolution
              </h2>
              <div className="absolute -z-10 inset-0 blur-[100px] opacity-30 
                              bg-gradient-to-r from-blue-600 to-purple-600" />
            </div>

            {/* Form */}
            <div className='max-w-md mx-auto'>
              <form
                onSubmit={(e)=>{
                  e.preventDefault() 
                  const data = Object.fromEntries(new FormData(e.currentTarget))
                  setAction(JSON.stringify(data))
                  setIsSubmitted(true)
                  e.target.reset()
                }}
                className='bg-gray-900/40 backdrop-blur-xl 
                          rounded-3xl p-8 md:p-10
                          shadow-[0_0_15px_rgba(0,0,0,0.2)]
                          border border-gray-700/50
                          space-y-8'
              >
                <div className='space-y-6'>
                  <div className='space-y-3'>
                    <label htmlFor="username" 
                          className='block text-gray-200 text-sm font-medium'>
                      Username
                    </label>
                    <input 
                      type="text"
                      placeholder='Enter your username'
                      name='username'
                      className='w-full px-4 py-3 
                      bg-gray-800/50 
                      border border-gray-600/50 
                      rounded-xl 
                      focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                      transition-all duration-300 
                      outline-none text-white
                      placeholder:text-gray-400'
                      
                      />
                  </div>

                  <div className='space-y-3'>
                    <label htmlFor="email" 
                          className='block text-gray-200 text-sm font-medium'>
                      Email
                    </label>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      name='email'
                      className='w-full px-4 py-3 
                      bg-gray-800/50 
                      border border-gray-600/50 
                      rounded-xl 
                      focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                      transition-all duration-300 
                      outline-none text-white
                      placeholder:text-gray-400'
                      />
                  </div>

                  <button 
                    type='submit' 
                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600
                    text-white rounded-xl py-3.5 font-semibold
                    hover:from-blue-700 hover:to-purple-700 
                    transition-all duration-300
                    focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2
                    transform hover:scale-[1.02]'
                    >
                    Submit
                  </button>
                    {isSubmitted && <p className='text-blue-600 text-center'>Submitted!</p>}
                </div>
              </form>
            </div>
          </section>



          <section className="container mx-auto px-4 py-12 relative" ref={galleryRef}>
  <div className="max-w-4xl mx-auto">
    {/* Title */}
    <div className="text-center mb-12 relative">
      <h2 className="text-4xl md:text-6xl font-bold 
                     bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent
                     animate-gradient
                     tracking-tight">
        Gallery
      </h2>
      <div className="absolute -z-10 inset-0 blur-[100px] opacity-30 
                     bg-gradient-to-r from-blue-600 to-purple-600" />
    </div>

    {/* Gallery Container */}
    <div className="aspect-[16/9] w-full max-h-[600px]
                    rounded-2xl overflow-hidden 
                    shadow-2xl border border-gray-800/50">
      <Gallery 
        images={images}
        className="w-full h-full"
      />
    </div>
  </div>
</section>

</main>

     {/* <Footer/> */}

    </div>
  );
}
