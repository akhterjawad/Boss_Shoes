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
            <nav className='borde py-[40px] flex items-center justify-between absolute w-full'>
                <Image
                    src={logo} // main logo
                    className='ml-[49px] mr-5' // Responsive positioning
                    width={96.41}
                    height={42.96}
                    alt='logo'
                    style={{ width: '20vw', height: 'auto', maxWidth: '96.41px', maxHeight: '42.96px' }} // Responsive sizing
                />
                <div id='MainDivFirstDiv' className='md:w-[600px] w-[200px] z-10 h-16 bg-[rgb(139,201,236)] bg-opacity-60 backdrop-blur-sm flex items-center justify-between'>
                    <p className='text-white ml-5 hidden md:inline-block text-sm sm:text-base'>HOME</p>
                    <p className='text-white hidden md:inline-block text-sm sm:text-base'>OUR PRODUCT'S</p>
                    <Image
                        src={shoppingBagNavbar}
                        className='hidden md:inline-block'
                        width={25}
                        height={25}
                        alt='shopping bag'
                    />
                    <Image
                        src={searchIconImage}
                        className='hidden mr-10 md:inline-block'
                        width={25}
                        height={25}
                        alt='search icon'
                    />
                    <Image
                        src={hamburger}
                        id='hamburger'
                        className=" mx-auto inline-block  md:hidden " // Centered in md screens
                        width={30}
                        height={30}
                        alt='hamburger menu'
                    />
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
