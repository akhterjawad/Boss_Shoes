import Image from 'next/image';
import React from 'react';
import logo from '../asset/logo.png'; // For logo image
import hamburger from '../asset/hamburger.png';
import shoppingBagNavbar from '../asset/shoppingBagNavbar.png';
import searchIconImage from '../asset/navSearchIcon.png';
import Link from 'next/link';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className=' sm:py-[50px] py-[20px] flex items-center justify-between absolute w-full top-1'>
                <Image
                    src={logo} // main logo
                    className='sm:ml-[49px] ml-[30px] mr-5 sm:w-[96.41px] sm:h-[33px] w-[50px] h-[20.96px]' // Responsive positioning
                    width={96.41}
                    height={42.96}
                    alt='logo'
                // Responsive sizing
                />
                <div id='MainDivFirstDiv' className='md:w-[600px] sm:w-[400px] w-[100px] z-20 sm:h-16 h-10 bg-[rgb(139,201,236)] bg-opacity-60 backdrop-blur-sm flex items-center justify-between'>
                    <Link href={'#home'}>
                        <p className=' ml-5 hidden md:inline-block text-sm sm:text-base cursor-pointer '>HOME</p>
                    </Link>
                    <Link href={'#product'}>
                        <p className='  cursor-pointer hidden md:inline-block text-sm sm:text-base'>OUR PRODUCT'S</p>
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
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
