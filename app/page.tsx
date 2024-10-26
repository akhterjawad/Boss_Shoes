// import React from 'react'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar'
import Image from 'next/image';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';
import leftArrow from './asset/leftarrow.png';
import rightarrow from './asset/rightarrow.png';
import yellowshoe from './asset/yellowshoe.png';
import deliverybox from './asset/deliverybox.png';

const page = () => {
  return (
    <React.Fragment>
      <Navbar /> {/* navbar */}

      {/* hero section */}
      <div style={{
        position: 'relative',
        height: '300vh',
        width: 'full',
      }}>
        <div style={{
          backgroundImage: `url(${roundDivHead.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          height: '60%',
          width: '40%',
          opacity: 0.5, // Adjust opacity of the image
          position: 'absolute',
          top: -0,
          left: 0,
        }}></div>
        <Image
          src={headerLeagShoes}
          className=' relative z-10   left-[24%] h-auto w-[65vw] sm:w-[55vw] '
          alt='headerLeagShoes'
          style={{}} // Responsive sizing
        />

        <h1 className=" relative w-ful text-[28vw] bottom-[190px] lg:bottom-[92vh] md:bottom-[40vh]  font-bold text-center">
          BIGAIR
        </h1>
        <h3 className='mt-[-9rem] xl:mt-[-40rem] ml-4 xl:ml-6 text-[1.5rem] xl:text-[2.5rem]'>
          Walk Like a Boss
        </h3>
        <p className='ml-4 md:ml-6 text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>


        <div className='absolute mt-3 left-0 right-0 w-full borde flex gap-5 items-center justify-around flex-wrap'>

          <div className=' '>
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


          <div className=' flex  items-center gap-28 sm:gap-40 justify-center'>
            <Image src={leftArrow} width={20} height={20} alt='leftArrow' className='cursor-pointer' />
            <div className='flex items-center justify-center '>

              <p className='text-[1.1rem]'>01/ </p><p className=' text-[0.8rem]'>05</p>
            </div>
            <Image src={rightarrow} width={20} height={20} alt='rightarrow' className='cursor-pointer' />
          </div>
          <div className=' flex justify-center  '>
            <Image className='borde mr-10' src={yellowshoe} width={150} height={150} alt='yellowshoe' />
            <div className='flex flex-col justify-center w-32 items-center  bg-[rgb(139,201,236)]'>
              <h5 className='text-[0.7rem]'>Our Trending Arivals</h5>
              <p className='text-[0.5rem]'>Lorem ipsum dolor sit amet, </p><p className='text-[0.5rem]'>
                consectetur adipiscing elit</p>
              <Stack spacing={2} direction="row">
                <Button
                  sx={{
                    width: { xs: '3rem', sm: '4rem', md: '5rem' },  // progressively larger sizes
                    color: 'white',
                    fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.7rem' },  // progressively larger font sizes
                    borderColor: 'white',
                    '&:hover': {
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
          </div>
        </div>

        <div className="flex items-center justify-around gap-5 mt-44 sm:mt-40 flex-wrap  py-8">

          {/* Free Shipping Section */}
          <div className="border rounded-lg p-10 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 w-[350.56px]">
            <Image src={deliverybox} width={20} height={20} alt="deliverybox" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold">Free Shipping Worldwide</p>
              <p>Tell us about your service</p>
            </div>
          </div>

          {/* Money Back Guarantee Section */}
          <div className="border rounded-lg p-10 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 w-[350.56px]">
            <Image src={deliverybox} width={20} height={20} alt="moneyback" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold">Money Back Guarantee</p>
              <p>Within 30 Days for an Exchange</p>
            </div>
          </div>

          {/* Online Support Section */}
          <div className="border rounded-lg p-10 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 w-[350.56px]">
            <Image src={deliverybox} width={20} height={20} alt="support" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold">Online Support</p>
              <p>24 Hours a Day, 7 Days a Week</p>
            </div>
          </div>
        </div>


      </div>



      {/* products section */}











    </React.Fragment>
  )
}

export default page
