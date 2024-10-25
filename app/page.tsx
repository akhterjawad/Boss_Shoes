"use client"
import * as React from 'react';
import { motion } from 'framer-motion';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar'
import Image from 'next/image';
import roundDivHead from './asset/roundDivHead.png';
import headerLeagShoes from './asset/headerLeagShoes.png';
import leftArrow from './asset/leftarrow.png';
import rightarrow from './asset/rightarrow.png';
import yellowshoe from './asset/yellowshoe.png';

const page = () => {
  return (
    <React.Fragment>
      <Navbar /> {/* navbar */}

      {/* hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=''
        style={{
          backgroundImage: `url(${roundDivHead.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          height: '400vh',
          width: '72vw',
        }}
      >
        <div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={headerLeagShoes}
            className='relative z-10 left-[35%] h-auto w-[65vw] sm:w-[55vw]'
            alt='headerLeagShoes'
          />
        </div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full text-[28vw] bottom-[190px] lg:bottom-[92vh] md:bottom-[40vh] font-bold text-center"
        >
          BIGAIR
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className='mt-[-9rem] xl:mt-[-40rem] ml-4 xl:ml-6 text-[1.5rem] xl:text-[2.5rem]'>
            Walk Like a Boss
          </h3>
          <p className='ml-4 md:ml-6 text-sm md:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='absolute mt-3 left-0 right-0 w-full flex gap-5 items-center justify-around flex-wrap'
        >
          {/* ... (rest of the content remains the same) ... */}
        </motion.div>
      </motion.div>

      {/* products section */}
    </React.Fragment>
  )
}

export default page