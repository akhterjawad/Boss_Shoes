// import React from 'react'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from 'next/image';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';
import leftArrow from './asset/leftarrow.png';
import rightarrow from './asset/rightarrow.png';
import yellowshoe from './asset/yellowshoe.png';
import deliverybox from './asset/deliverybox.png';
import productBackRoundImag from './asset/productBackRoundImag.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import shoppingBagNavbar from './asset/navSearchIcon.png';
import Products from './components/Products';


const page = () => {
  return (
    <React.Fragment>
      <Navbar />



      {/* hero,main section */}
      <main id='home' style={{
        position: 'relative',
        // height: '1000px',
        marginTop: '-20px',
        width: 'full',
      }}>
        <div style={{
          backgroundImage: `url(${roundDivHead.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          height: '100%',
          width: '40%',
          // opacity: 0.5, // Adjust opacity of the image
          position: 'absolute',
          top: 20,
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
        <p className='ml-4 md:ml-6 text-sm md:text-base mb-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>


        <div className='absolute mt-3 left-0 right-0 w-full borde flex gap-5 items-center justify-around flex-wrap '>

          <div className=' '>
            <Stack spacing={2} direction="row">
              <Button
                sx={{
                  width: { sm: '5rem', md: '7rem' },
                  color: 'white',
                  fontSize: { sm: '0.8rem', md: '1rem' },
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


          <div className=' flex  items-center gap-28 sm:gap-40 justify-center'>
            <Image src={leftArrow} width={20} height={20} alt='leftArrow' className='cursor-pointer' />
            <div className='flex items-center justify-center '>

              <p className='text-[1.1rem]'>01/ </p><p className=' text-[0.8rem]'>05</p>
            </div>
            <Image src={rightarrow} width={20} height={20} alt='rightarrow' className='cursor-pointer' />
          </div>
          <div className=' flex h-[5.8rem] bg-[rgb(139,201,236)]  justify-center  items-center'>
            <div className="flex items-center w-36 h-36 mr-10">
              <div className="w-1/2 bg-[#77C0E9] h-full sm:inline-block md:inline-block hidden" /> {/* Left Half */}
              <div className="w-1/2 bg-[rgb(139,201,236)] h-[80px] " /> {/* Right Half */}
              <Image
                className="absolute z-10 w-36 h-36 rounded-xl" // Ensure the image fits
                src={yellowshoe}
                width={150}
                height={150}
                alt="yellowshoe"
              />
            </div>


            <div className='flex flex-col justify-center h-[5.8rem] w-32 items-center  bg-[rgb(139,201,236)]'>
              <h5 className='text-[0.7rem]'>Our Trending Arivals</h5>
              <p className='text-[0.5rem]'>Lorem ipsum dolor sit amet, </p><p className='text-[0.5rem] '>
                consectetur adipiscing elit</p>
              <Stack sx={{ marginTop: 1 }} spacing={2} direction="row">
                <Button
                  sx={{
                    width: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    color: 'white',
                    fontSize: { xs: '0.3rem', sm: '0.4rem', md: '0.5rem' },
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

        <div className="flex items-center justify-around gap-5 mt-64 sm:mt-40 flex-wrap  py-8">

          {/* Free Shipping Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 ">
            <Image src={deliverybox} width={40} height={40} alt="deliverybox" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Free Shipping Worldwide</p>
              <p className='text-[rgb(142 199 232)]'>Tell us about your service</p>
            </div>
          </div>

          {/* Money Back Guarantee Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 ">
            <Image src={deliverybox} width={40} height={40} alt="moneyback" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Money Back Guarantee</p>
              <p className='text-[rgb(142 199 232)]'>Within 30 Days for an Exchange</p>
            </div>
          </div>

          {/* Online Support Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 ">
            <Image src={deliverybox} width={40} height={40} alt="support" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Online Support</p>
              <p className='text-[rgb(142 199 232)]'>24 Hours a 7 Day</p>
            </div>
          </div>
        </div>
      </main>


      <div className="flex items-center mt-16 flex-col gap-3 justify-center">
        <h4 className="text-4xl font-semibold">Our Product’s</h4>
        <div className="border w-20"></div>
      </div>

      {/* Product Section with Background Image */}
      <div className="relative w-full h-[260vh] ">
        {/* Background image positioned absolutely within the relative container */}
        <div className='ml-[10%] w-full  '
          style={{
            backgroundImage: `url(${productBackRoundImag.src})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            height: '126%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        ></div>

        <Products />
        <Products />
        <Products />


      </div>

      {/* <div id='product'>
        <Footer />
      </div> */}
    </React.Fragment>
  )
}

export default page
