import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

                     <div className=' main flex justify-between lg:justify-around md:justify-around items-center
              py-5 px-5  lg:mb-28 md:mb-28 mb-10'>

            {/* left  side navbar */}

             <div className='left'>

                  <div className='netflix_logo'>

                      <img  className=' lg:w-44 md:w-44 w-28' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png ' alt=''
                   />

                  </div>
 

       </div>
                  
                  
                     {/* right  side navbar*/}


                      <div className=''>

                           <div className='main flex items-center'>

                           <div className='selector bg-[#111112] text-white mx-5 lg:px-5 md:px-5 px-3 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 ' >
                           <select

                           name=''
                             id=''
                             className='bg-transparent outline-none bg-black cursor-pointer '
                           >
                          
                          <option value="English" >English</option>
                          <option value="हिन्दी">हिन्दी</option>

                           </select>


                           </div>

                         <Link to={'/signin'}>
                         <button  className='bg-[#e50815] hover:bg-[#d80c1a] text-white px-5 py-1.5 rounded-lg font-bold ' > Sign In</button>
                         </Link>

                       </div>

                      </div>



       </div>


    </div>
  )
}

export default Navbar


