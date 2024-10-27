'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';
import cardMan from './asset/cardMan.jpg';
import message from './asset/message.jpg';
import leftArrow from './asset/leftarrow.png';
import rightarrow from './asset/rightarrow.png';
import yellowshoe from './asset/yellowshoe.png';
import deliverybox from './asset/deliverybox.png';
import productBackRoundImag from './asset/productBackRoundImag.png';
import rotatediv from './asset/rotatediv.png';
import Products from './components/Products';
import singleProductShoe from './asset/singleProductShoe.png';
import logo from './asset/logo.png'; // For logo image
import hamburger from './asset/hamburger.png';
import shoppingBagNavbar from './asset/shoppingBagNavbar.png';
import searchIconImage from './asset/navSearchIcon.png';
import image1 from './asset/Group 5.png';
import image2 from './asset/Group 6.png';
import image3 from './asset/Group 7.png';
import image4 from './asset/Group 8.png';
import image5 from './asset/Group 9.png';
import image6 from './asset/Group 10.png';

const Page = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <React.Fragment>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='sm:py-[50px] py-[20px] flex items-center justify-between absolute w-full top-1'
      >
        <Image
          src={logo}
          className='sm:ml-[49px] ml-[30px] mr-5 sm:w-[96.41px] sm:h-[33px] w-[50px] h-[20.96px]' // Responsive positioning
          width={96.41}
          height={42.96}
          alt='logo'
        />
        <div id='MainDivFirstDiv' className='md:w-[600px] sm:w-[400px] w-[100px] z-20 sm:h-16 h-10 bg-[rgb(139,201,236)] bg-opacity-60 backdrop-blur-sm flex items-center justify-between'>
          <Link href={'#home'}>
            <p className=' ml-5 hidden md:inline-block text-sm sm:text-base cursor-pointer '>HOME</p>
          </Link>
          <Link href={'#product'}>
            <p className='  cursor-pointer hidden md:inline-block text-sm sm:text-base'>OUR PRODUCTS</p>
          </Link>
          <Image
            src={shoppingBagNavbar}
            className=' cursor-pointer hidden md:inline-block'
            width={25}
            height={25}
            alt='shopping bag'
          />
          <Image
            src={searchIconImage}
            className=' cursor-pointer hidden mr-10 md:inline-block'
            width={25}
            height={25}
            alt='search icon'
          />
          <Image
            src={hamburger}
            id='hamburger'
            className="  mx-auto inline-block md:hidden w-[10px] h-[8px] sm:w-[15px] sm:h-[12px] md:w-[30px] md:h-[25px] cursor-pointer"
            width={300}
            height={300}
            alt='hamburger menu'
          />
        </div>
      </motion.nav>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id='home'
        className="relative w-full mt-[-20px]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 w-2/5 h-full bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url(${roundDivHead.src})`,
          }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={headerLeagShoes}
            className='relative z-10 left-[24%] h-auto w-[65vw] sm:w-[55vw]'
            alt='headerLeagShoes'
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative w-full text-[28vw] bottom-[190px] lg:bottom-[92vh] md:bottom-[40vh] font-bold text-center"
        >
          BIGAIR
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-[-9rem] xl:mt-[-40rem] ml-4 xl:ml-6 text-[1.5rem] xl:text-[2.5rem]'
        >
          Walk Like a Boss
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='ml-4 md:ml-6 text-sm md:text-base mb-10'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </motion.p>

        <div className='absolute mt-3 left-0 right-0 w-full flex flex-wrap gap-5 items-center justify-around'>
          <div>
            <Stack spacing={2} direction="row">
              <Button
                sx={{
                  width: { xs: '5rem', sm: '5rem', md: '7rem' },
                  color: 'white',
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
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

          <div className='flex items-center gap-28 sm:gap-40 justify-center'>
            <Image src={leftArrow} width={20} height={20} alt='leftArrow' className='cursor-pointer' />
            <div className='flex items-center justify-center'>
              <p className='text-[1.1rem]'>01/ </p><p className='text-[0.8rem]'>05</p>
            </div>
            <Image src={rightarrow} width={20} height={20} alt='rightarrow' className='cursor-pointer' />
          </div>
          <div className='flex h-[5.8rem] bg-[rgb(139,201,236)] justify-center items-center'>
            <div className="flex items-center w-36 h-36 mr-10">
              <div className="w-1/2 bg-[#77C0E9] h-full sm:inline-block md:inline-block hidden" />
              <div className="w-1/2 bg-[rgb(139,201,236)] h-[80px]" />
              <Image
                className="absolute z-10 w-36 h-36 rounded-xl"
                src={yellowshoe}
                width={150}
                height={150}
                alt="yellowshoe"
              />
            </div>

            <div className='flex flex-col justify-center h-[5.8rem] w-32 items-center bg-[rgb(139,201,236)]'>
              <h5 className='text-[0.7rem]'>Our Trending Arivals</h5>
              <p className='text-[0.5rem]'>Lorem ipsum dolor sit amet, </p>
              <p className='text-[0.5rem]'>consectetur adipiscing elit</p>
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

        <div className="flex flex-wrap items-center justify-around gap-5 mt-64 sm:mt-40 py-8">
          {/* Free Shipping Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-full sm:w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 mb-4 sm:mb-0">
            <Image src={deliverybox} width={40} height={40} alt="deliverybox" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Free Shipping Worldwide</p>
              <p className='text-[rgb(142 199 232)]'>Tell us about your service</p>
            </div>
          </div>

          {/* Money Back Guarantee Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-full sm:w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2 mb-4 sm:mb-0">
            <Image src={deliverybox} width={40} height={40} alt="moneyback" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Money Back Guarantee</p>
              <p className='text-[rgb(142 199 232)]'>Within 30 Days for an Exchange</p>
            </div>
          </div>

          {/* Online Support Section */}
          <div className="border-[rgb(142 199 232)] border-2 w-full sm:w-[370px] h-[145px] rounded-lg pl-5 bg-[rgb(139,201,236)] flex items-center gap-5 mx-2">
            <Image src={deliverybox} width={40} height={40} alt="support" />
            <div className="flex flex-col items-start justify-center gap-1 text-center">
              <p className="font-semibold text-[1.2rem]">Online Support</p>
              <p className='text-[rgb(142 199 232)]'>24 Hours a 7 Day</p>
            </div>
          </div>
        </div>
      </motion.main>

      <motion.div
        id='product'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex m-auto items-center mt-16 flex-col gap-3 justify-around"
      >
        <h4 className="text-2xl sm:text-4xl font-semibold">Our Products</h4>
        <div className="border w-20"></div>
      </motion.div>

      <div className="relative w-[90vw] h-auto sm:h-[277vh]">
        <div className='ml-[10%] w-full sm:w-full overflow-hidden sm:h-full  '
          style={{
            overflow: 'hidden',
            backgroundImage: `url(${productBackRoundImag.src})`,
            // backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            height: '126%',
            position: 'absolute',
            top: -110,
            left: 0,
          }}
        ></div>

        <div className='w-full justify-center flex flex-col b items-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="relative flex w-full flex-wrap justify-center items-center"
          >
            <Products image={image1.src} />
            <Products image={image2.src} />
            <Products image={image3.src} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2, delay: 0.4 }}
            className="relative flex flex-wrap justify-center items-center"
          >
            <Products image={image4.src} />
            <Products image={image5.src} />
            <Products image={image6.src} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2, delay: 0.8 }}
            className="relative flex justify-center items-center flex-wrap"
          >
            <Products image={image3.src} />
            <Products image={image1.src} />
            <Products image={image4.src} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='flex justify-center items-center'
          >
            <button className='bg-[rgb(139,201,236)] text-white px-4 py-2 rounded-md'>
              View All
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center mt-20 flex-col gap-3 justify-center"
        >
          <h4 className="text-2xl sm:text-4xl font-semibold">Our Product Quality</h4>
          <div className="border w-32"></div>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-around">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 w-full md:w-1/2"
          >
            {/* Feature 1 */}
            <div className="px-10 flex items-center space-x-3">
              <div className="flex items-center justify-center p-2 rounded-xl border">
                <Image src={shoppingBagNavbar} width={20} height={20} alt="shoppingBagNavbar" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Best Quality Shoes</h3>
                <p className="text-xs md:text-sm text-gray-100">Lorem ipsum dolor sit amet,</p>
                <p className="text-xs md:text-sm text-gray-100">consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="px-10 flex items-center space-x-3">
              <div className="flex items-center justify-center p-2 rounded-xl border">
                <Image src={shoppingBagNavbar} width={20} height={20} alt="shoppingBagNavbar" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Long Lasting</h3>
                <p className="text-xs md:text-sm text-gray-100">Lorem ipsum dolor sit amet,</p>
                <p className="text-xs md:text-sm text-gray-100">consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="px-10 flex items-center   space-x-3">
              <div className="flex items-center justify-center p-2 rounded-xl border">
                <Image src={shoppingBagNavbar} width={20} height={20} alt="shoppingBagNavbar" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Best Value</h3>
                <p className="text-xs md:text-sm text-gray-100">Lorem ipsum dolor sit amet,</p>
                <p className="text-xs md:text-sm text-gray-100">consectetur adipiscing elit.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center mt-10 md:mt-0 w-full md:w-1/2"
          >
            <div className="absolute w-80 h-80 sm:w-72 sm:h-72 md:w-96 md:h-96  bg-gradient-to-b from-blue-500 to-[#77C0E9] rounded-full z-10"></div>
            <Image
              src={singleProductShoe}
              className="relative z-10"
              width={450}
              height={450}
              alt="singleProductShoe"
              style={{ transform: 'rotate(-15deg)' }}
            />
          </motion.div>
        </div>
      </div>

      <div className=''>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#77C0E9] w-full min-h-screen overflow-hidden justify-center items-start p-4 sm:p-10 z-[10]"
        >
          <div className='w-full '
            style={{
              backgroundImage: `url(${rotatediv.src})`,
              backgroundSize: 'cover',

              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
              height: '290%',
              position: 'absolute',
              top: 2400,
              right: 0,
            }}
          ></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-20 sm:mt-80 z-2"
          >
            <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight z-10">
              What Our Happy
              <br />
              Customer Says
            </h1>
          </motion.div>
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-5"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-5"
          >
            <h1 className="text-white text-lg sm:text-xl font-bold leading-tight">
              We value our customers feedback and strive to
              provide the best experience possible.
              <br />
              Here's what our happy customers have to say
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, staggerChildren: 0.2 }}
            className="flex flex-col md:flex-row text-white justify-around items-center gap-8 md:gap-20 mt-10 md:mt-20"
          >
            <div className="bg-blue-200 bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-4">
                <Image
                  src={cardMan}
                  width={48}
                  height={48}
                  alt='cardMan'
                  className="object-cover rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
                />

                <Image
                  src={message}
                  width={40}
                  height={40}
                  alt='message'
                  className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
                />

              </div>
              <p className="text-sm font-semibold mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <div className="mt-auto">
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm">CEO, Company Name</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md w-full md:w-1/3 h-auto md:h-60 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-4">
                <Image
                  src={cardMan}
                  width={48}
                  height={48}
                  alt='cardMan'
                  className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
                />

                <Image
                  src={message}
                  width={40}
                  height={40}
                  alt='message'
                  className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
                />

              </div>
              <p className="text-sm font-semibold mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <div className="mt-auto">
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm">CEO, Company Name</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black h-96 mt-10 overflow-hidden bottom-0 text-white w-full py-6 sm:py-10"
      >
        <div className="flex justify-center items-center mb-6 sm:mb-10">
          <div className="text-center mt-12">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Boss
              <span className="block mt-1">Shoes</span>
            </h1>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center items-center px-4 sm:px-10 gap-4 sm:gap-8 mb-6 sm:mb-10">
          <a href="#" className="text-sm sm:text-base hover:underline">Terms of Service</a>
          <a href="#" className="text-sm sm:text-base hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm sm:text-base hover:underline">Security</a>
          <a href="#" className="text-sm sm:text-base hover:underline">FAQ</a>
        </nav>

        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <select className="bg-black text-white text-sm sm:text-base border border-white rounded px-2 py-1">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            <a href="#" className="text-sm sm:text-base hover:text-gray-300">FB</a>
            <a href="#" className="text-sm sm:text-base hover:text-gray-300">TW</a>
            <a href="#" className="text-sm sm:text-base hover:text-gray-300">LI</a>
            <a href="#" className="text-sm sm:text-base hover:text-gray-300">IN</a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm sm:text-base">
              BOSS SHOES © All rights Reserved
            </p>
          </div>
        </div>
      </motion.footer>
    </React.Fragment>
  )
}

export default Page
