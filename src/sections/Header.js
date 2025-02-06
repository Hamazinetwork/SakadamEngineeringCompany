import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const navItem = [
        { Link: 'Home', Path: 'Home' },
        { Link: 'About', Path: 'About' },
        { Link: 'Services', Path: 'Services' },
        { Link: 'Projects', Path: 'Working' },
        { Link: 'Leadership', Path: 'Testimonia' },
    ];

    return (
        <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
            <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>Sakadam
            <span className='text-yellow italic'> Engineering company</span></h1>
            <ul className='lg:flex justify-center items-center gap-6 hidden'>
                {navItem.map(({ Link: NavText, Path }) => (
                    <li key={Path}>
                        <Link
                            className='text-black uppercase font-bold rounded-full hover:bg-yellow-500 hover:text-black text-[15px]'
                            to={Path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {NavText}
                        </Link>
                    </li>
                ))}
            </ul>
           
            {/*Mobile Device */}
            <div className='flex justify-between items-center lg:hidden mt-3 ' onClick={toggleMenu}>
                <div >
                    {isMenuOpen ? <FaXmark className='text-black text-3xl cursor-pointer '/>
                    :<FaBars className='text-black text-3xl cursor-pointer '/>
                }
                </div>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-white opacity-90 p-4 absolute top-[72px] left-0`}onClick={closeMenu}>
                <ul className='flex flex-col justify-center items-center gap-2 w-full'>
                    {
                        navItem.map(({Link: NavText, Path})=>(
                            <Link key={Path} className="text-black uppercase font-semi-bold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center" to={Path} spy={true} offset={true} smooth={true}>{NavText}</Link>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;

