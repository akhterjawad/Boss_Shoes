// import React from 'react'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar'
import Image from 'next/image';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';
import leftArrow from './asset/leftarrow.png';

const page = () => {
  return (
    <React.Fragment>
      <Navbar /> {/* navbar */}

      {/* hero section */}
      <div
        className=''
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
          alt='headerLeagShoes'
          style={{}} // Responsive sizing
        />
        {/* sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem] */}
        <h1 className=" relative w-ful text-[28vw] bottom-[190px] lg:bottom-[92vh] md:bottom-[40vh]  font-bold text-center">
          BIGAIR
        </h1>
        <h3 className='mt-[-9rem] xl:mt-[-40rem] ml-4 xl:ml-6 text-[1.5rem] xl:text-[2.5rem]'>
          Walk Like a Boss
        </h3>
        <p className='ml-4 md:ml-6 text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>


        <div className='absolute left-0 right-0 w-full border flex items-center justify-between flex-wrap'>

          <div className='ml-2 sm:ml-6 '>
            <Stack spacing={2} direction="row">
              <Button
                sx={{
                  width: { sm: '5rem', md: '7rem' },       // Adjusted width for better content fit
                  color: 'white',                          // Sets the text color to white
                  fontSize: { sm: '0.8rem', md: '1rem' },  // Sets responsive font sizes
                  borderColor: 'white',                    // Sets the border color to white
                  '&:hover': {                             // Hover effects
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                variant="outlined"
              >
                Explore
              </Button>
            </Stack>
          </div>


          <div className='flex items-center justify-center'>
            <Image src={leftArrow} width={20} height={20} alt='leftArrow' />
            <p>01/05</p>
            <Image src={leftArrow} width={20} height={20} alt='leftArrow' />
          </div>
          <div className='border w-20 h-10 sm:mr-5 mr-2'></div>
        </div>
      </div>
      {/* products section */}

    </React.Fragment>
  )
}

export default page
