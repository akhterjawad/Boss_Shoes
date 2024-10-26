import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            {/* Footer section */}
            <footer className="bg-black z-0 relative bottom-0 border  w-full py-6 sm:py-10 ">
                {/* Logo */}
                <div className="flex justify-center items-center text-wrap mb-6 sm:mb-10">
                    <div className="leading-tight  ">
                        <h1 className="text-white text-2xl sm:text-3xl font-bold ">
                            Boss
                            <br />
                            <h1 className="px-5">
                                Shoes
                            </h1>
                        </h1>
                    </div>
                </div>

                {/* Navigation links */}
                <div className="flex flex-wrap justify-center items-center px-4 sm:px-10 gap-4 sm:gap-8 mb-6 sm:mb-10">
                    <p className="text-white text-sm sm:text-xl leading-3">
                        Terms of Service
                    </p>
                    <p className="text-white text-sm sm:text-xl leading-3">
                        Privacy Policy
                    </p>
                    <p className="text-white text-sm sm:text-xl leading-3">
                        Security
                    </p>
                    <p className="text-white text-sm sm:text-xl leading-3">
                        FAQ
                    </p>
                </div>

                {/* Bottom footer section */}
                <div className="flex flex-col sm:flex-row items-center px-4 sm:px-10 gap-4 sm:gap-0">
                    {/* Language selector */}
                    <div className="text-center sm:text-left sm:w-1/3">
                        <h1 className="text-white text-sm sm:text-xl">
                            <p >English</p>
                        </h1>
                    </div>

                    {/* Social media links */}
                    <div className="flex justify-center sm:w-1/3 gap-4 sm:gap-8">
                        <p className="text-white text-sm sm:text-xl">
                            FB
                        </p>
                        <p className="text-white text-sm sm:text-xl">
                            TW
                        </p>
                        <p className="text-white text-sm sm:text-xl">
                            LI
                        </p>
                        <p className="text-white text-sm sm:text-xl">
                            IN
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="sm:w-1/3 text-white text-center sm:text-right">
                        <p >
                            <h1 className="text-white text-sm sm:text-xl">
                                BOSS SHOES © All rights Reserved
                            </h1>
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
