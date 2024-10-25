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
            <nav className='borde sm:py-[40px] py-[10px] flex items-center justify-between absolute w-full'>
                <Image
                    src={logo} // main logo
                    className='ml-[49px] mr-5 sm:w-[96.41px] sm:h-[33px] w-[50px] h-[20.96px]' // Responsive positioning
                    width={96.41}
                    height={42.96}
                    alt='logo'
                // Responsive sizing
                />
                <div id='MainDivFirstDiv' className='md:w-[600px] sm:w-[400px] w-[200px] z-20 h-16 bg-[rgb(139,201,236)] bg-opacity-60 backdrop-blur-sm flex items-center justify-between'>
                    <p className=' ml-5 hidden md:inline-block text-sm sm:text-base'>HOME</p>
                    <p className=' hidden md:inline-block text-sm sm:text-base'>OUR PRODUCT'S</p>
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
                        className="mx-auto inline-block md:hidden w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] cursor-pointer"
                        width={300}
                        height={300}
                        alt='hamburger menu'
                    />

                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
