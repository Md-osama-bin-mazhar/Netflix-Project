import React from 'react'
import HeroSection from '../components/HeroSection'
import Enjoy from '../components/Enjoy'
import Download from '../components/Download'
import Watch from '../components/Watch'
import CreateProfile from '../components/CreateProfile'
import { faqData } from '../data/faqdata'
import Faq from '../components/Faq'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>

        <HeroSection/>
        <Enjoy/>
      <Download/>
       <Watch/>
       <CreateProfile/>

       <div>
           <h2 className='text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold py-10'>Frequently Asked <br className='lg:hidden md:hidden sm:hidden'/> Questions</h2>

      <div className='mb-10'>
      {faqData.map((item, index) => {
            const { title, desc } = item
            return (
              <Faq key={index} title={title} desc={desc} />
            )
          })}

         
      </div>

           <div className='lg:mb-16 md:mb-16 mb-10'>
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

           <div className='hr_line'></div>

       </div>

        <Footer/>
        


    </div>
  )
}

export default Home