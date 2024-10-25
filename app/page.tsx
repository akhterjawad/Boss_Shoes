import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';

const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        className='relative borde '
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
          className='relative z-10   left-[35%] h-auto w-[60vw] sm:w-[50vw] '
          alt='logo'
          style={{  }} // Responsive sizing
        />
        {/* sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem] */}
        <h1 className="relative w-ful text-[28vw] bottom-[100px] lg:bottom-[85vh] text-white font-bold text-center">
    BIGAIR
</h1>


      </div>
    </React.Fragment>
  )
}

export default page
