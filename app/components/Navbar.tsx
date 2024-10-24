import Image from 'next/image';
import React from 'react';
import logo from '../asset/logo.png'; // For logo image
import roundDivHead from '../asset/roundDivHead.png'; // Import the background image
import headerLeagShoes from '../asset/headerLeagShoes.png'; // Import the background image

const Navbar = () => {
    return (
        <React.Fragment>
            <div
                className='relative' // Ensuring the div itself has relative positioning
                style={{
                    backgroundImage: `url(${roundDivHead.src})`, // Background image
                    backgroundSize: 'cover', // Adjust to container size
                    backgroundPosition: 'right', // Align right
                    height: '2000px', // Full height for the div
                    width: '750px', // Full width
                }}
            >
                <div className='w-[900px] absolute z-10 h-7 border ml-[50%] bg-transparent ' ></div>
                <Image
                    src={logo}
                    className='absolute top-[70px] left-[58px]' // Positioning using absolute
                    width={96.41}
                    height={42.96}
                    alt='logo'
                />
                <h1 className='absolute text-[24rem] top-24 text-white font-bold'>BIGAIR</h1>
                <Image
                    src={headerLeagShoes}
                    className='absolute top-0   left-1/2 ' // Positioning using absolute
                    width={2000}
                    height={5000}
                    alt='logo'
                />
            </div>
        </React.Fragment>
    );
};

export default Navbar;
