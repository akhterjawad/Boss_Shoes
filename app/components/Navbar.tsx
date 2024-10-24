import Image from 'next/image';
import React from 'react';
import logo from '../asset/logo.png'; // For logo image
import roundDivHead from '../asset/roundDivHead.png';
import headerLeagShoes from '../asset/headerLeagShoes.png';
import hamburger from '../asset/hamburger.png';
import searchIconImage from '../asset/NavSearchIcons.png';
import shoppingBagNavbar from '../asset/navSearchIcon.png';

const Navbar = () => {
    return (
        <React.Fragment>
            <div
                className='relative border '
                style={{
                    backgroundImage: `url(${roundDivHead.src})`, // Background image
                    backgroundSize: 'cover', // Adjust to container size
                    backgroundPosition: 'right', // Align right
                    height: '200vh', // Full height relative to the viewport
                    width: '100vw', // Full width relative to the viewport
                    maxWidth: '750px', // Max width for larger screens
                    maxHeight: '2000px', // Max height limit
                }}
            >


                <nav id='MainDivFirstDiv' className='eft-[99%] w-full sm:w-[500px] md:w-[600px] absolute top-0 right-0 z-10 h-16 border bg-opacity-30 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 md:px-8'>
                    <p className='text-white text-sm sm:text-base'>HOME</p>
                    <p className='text-white text-sm sm:text-base'>OUR PRODUCT'S</p>

                    <div className='flex items-center space-x-3'>
                        <Image
                            src={shoppingBagNavbar}
                            className=''
                            width={25}
                            height={25}
                            alt='shopping bag'
                        />
                        <Image
                            src={searchIconImage}
                            className=''
                            width={25}
                            height={25}
                            alt='search icon'
                        />
                        <Image
                            src={hamburger}
                            className=''
                            width={30}
                            height={30}
                            alt='hamburger menu'
                        />
                    </div>
                </nav>




                <Image
                    src={logo}
                    className='absolute top-[5%] left-[5%] sm:top-[4%] sm:left-[4%] md:top-[70px] md:left-[58px]' // Responsive positioning
                    width={96.41}
                    height={42.96}
                    alt='logo'
                    style={{ width: '20vw', height: 'auto', maxWidth: '96.41px', maxHeight: '42.96px' }} // Responsive sizing
                />

                <h1 className="absolute text-[8rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem] top-10 sm:top-16 md:top-24 text-white font-bold">
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
    );
};

export default Navbar;

