import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';

const page = () => {
  return (
    <React.Fragment>
      <Navbar /> {/* navbar */}

      {/* hero section */}
      <div
        className='relative border '
        style={{
          backgroundImage: `url(${roundDivHead.src})`, // Background image
          backgroundSize: 'cover', // Adjust to container size
          backgroundPosition: 'right', // Align right
          height: '400vh', // Full height relative to the viewport
          width: '72vw', // Full width relative to the viewport
          // Max height limit
        }}
      >
        <Image
          src={headerLeagShoes}
          className=' relative z-10   left-[35%] h-auto w-[65vw] sm:w-[55vw] '
          alt='logo'
          style={{}} // Responsive sizing
        />
        {/* sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem] */}
        <h1 className=" relative w-ful text-[28vw] bottom-[140px] lg:bottom-[95vh]  font-bold text-center">
          BIGAIR
        </h1>
        <h3 className='mt-[-9rem] xl:mt-[-40rem] ml-4 xl:ml-6 text-[1.5rem] xl:text-[2.5rem]'>
          Walk Like a Boss
        </h3>
        <p className='ml-4 md:ml-6 text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
<div className='flex items-center justify-around'>
  <div></div>
  <div></div>
  <div></div>
</div>
      </div>
      {/* products section */}

    </React.Fragment>
  )
}

export default page
