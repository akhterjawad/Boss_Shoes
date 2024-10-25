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
          width: '120vw', // Full width relative to the viewport
          maxWidth: '1000px', // Max width for larger screens
          maxHeight: '3000px', // Max height limit
        }}
      >


        {/* sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem] */}
        <h1 className="absolute text-[2500%]  top-10 sm:top-16 md:top-24 text-white font-bold">
          BIGAIR
        </h1>

        <Image
          src={headerLeagShoes}
          className='absolute top-[-10%] sm:top-[-5%] md:top-[-30px] left-[10%] sm:left-[15%] md:left-[300px]'
          alt='logo'
          style={{ width: '60vw', height: 'auto', maxWidth: '100rem', maxHeight: '40rem' }} // Responsive sizing
        />

      </div>
    </React.Fragment>
  )
}

export default page
