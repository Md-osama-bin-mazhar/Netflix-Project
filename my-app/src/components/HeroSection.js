import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (

   <>
      
      <div   className=' lg:h-[44.5em] md:h-[44em] h-[34em]'
         
         style={{
                    background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg )"
                }}>

             <Navbar/>

             {/* Hero section */}

          <div className='container mx-auto flex justify-center items-center h-96 '>
            <div className=''>

            <h1 className='text-white text-center lg:text-5xl md:text-5xl  text-3xl px-5 font-bold mb-5'>Unlimited movies, TV shows and more</h1>
            <p className='text-white text-center lg:text-2xl  md:text-2xl text-xl mb-5' >Watch anywhere. Cancel anytime.
            </p>

            <p className='text-white text-center lg:text-xl md:text-xl text-xl mb-5'>Ready to watch? Enter your email to 
            <br className='lg:hidden md:hidden sm-hidden '/> create or restart your membership.</p>

            <div className='flex flex-wrap justify-center items-center space-x-2'>

               <input  type='text' className='bg-[#1d1e1e] text-white text-lg px-3 py-3 lg:w-96 md:w-96 w-80 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50 outline-none mb-5 lg:mb-0 md:mb-0' placeholder='Email address'/>

               <button  className='bg-[#e50815] flex items-center px-5 py-3 rounded-lg gap-2 '>
                <p className='text-white font-bold text-xl'>Get Started  </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
               </button>

            </div>


            </div>
          </div>
        
        
    </div>
          
          <div className='hr_line'/>
   </>

)
}


export default HeroSection