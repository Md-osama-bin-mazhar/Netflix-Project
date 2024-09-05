import React from 'react'

const CreateProfile = () => {
  return (
    <div>
        

       <div className='main flex  flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5'>


       {/* left */}

       <div className='left order-last  lg:order-first md:order-first '>

         <img className='lg:w-[35em] md:w-[35em] w-[25em] ' src='https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="img' alt='images'/>

       </div>


           {/* right */}

           <div className='left mb-10 lg:mb-0 md:mb-0'>
 
           <h2 className='text-white lg:text-5xl md:text-5xl font-bold mb-5 text-center text-3xl lg:text-start md:text-start sm:text-start'>Create profiles for <br className='hidden lg:block'/> kids</h2>
           <p className='text-white lg:text-2xl md:text-2xl text-center text-lg lg:text-start
           md:text-start sm:text-start'>
             Send children on adventures with their <br className='hidden lg:block'/> favourite characters in a space made just for <br className ='hidden lg:block'/> them—free with your membership.
            </p>

           </div>

    
       </div>

         <div className='hr_line'/>

    </div>
  )
}

export default CreateProfile