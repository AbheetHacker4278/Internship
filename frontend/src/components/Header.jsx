import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';
import logout from '../assets/logout.svg';
import user from '../assets/user.svg';
import { ShopContext } from '../Context/ShopContext';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const {gettotalcartItem } = useContext(ShopContext);

    return (
        <header className="fixed top-0 left-0 w-full p-1 bg-white ring-1 rounded-2xl z-10 ring-fuchsia-200 shadow-fuchsia-100">
            <div className="px-4 flex items-center justify-between py-3 gap-5 max-xs:px-2">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img
                            src="https://i.ibb.co/SJjmGFY/images-removebg-preview-1.png"
                            alt="Logo"
                            className="w-32 md:w-40 transition-transform duration-200 ease-in-out hover:scale-110"
                        />
                    </Link>
                </div>

                {/* Navbar Section */}
                <div className="hidden md:flex flex-1 justify-center">
                    <Navbar containerStyles="flex gap-x-5 xl:gap-x-10 medium-15" />
                </div>

                {/* Mobile Navbar Toggle */}
                <div className="md:hidden flex-shrink-0">
                    <button
                        onClick={() => setMenuOpened(!menuOpened)}
                        className="text-blue-500 text-2xl focus:outline-none border rounded p-1 border-blue-500 hover:bg-blue-300 hover:text-black"
                    >
                        {menuOpened ? <MdClose /> : <MdMenu />}
                    </button>
                </div>

                {/* Mobile Navbar */}
                <div
                    className={`flex md:hidden flex-col gap-3 fixed top-24 right-4 bg-white p-5 rounded-lg shadow-lg ring-1 ring-slate-900/5 max-w-96 transition-transform duration-300 ease-in-out ${menuOpened
                        ? 'transform translate-y-0 opacity-100 visible'
                        : 'transform -translate-y-5 opacity-0 invisible'
                        }`}
                >
                    <Navbar containerStyles="flex flex-col gap-y-6 medium-16" />
                </div>

                <div className="flex items-center gap-6 cursor-pointer hover:text-zinc-900">
                    {/* Cart Icon with Badge */}
                    <NavLink to={'/cart-page'} className="relative flex items-center">
                        <FaOpencart
                            className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded"
                        />
                        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-blue-400 text-white text-sm">
                        {gettotalcartItem()}
                        </span>
                    </NavLink>

                    {/* Logout Button */}
                    <div className="flex flex-row md:flex-row items-center gap-4">
                        {/* Logout Button */}
                        
                        {/* <NavLink to={'/logout'} className="group relative"> */}
                            {/* <div */}
                                {/* className="bg-blue-400 flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:border-blue-500 hover:shadow-fuchsia-300" */}
                            {/* > */}
                                {/* <span className="flex items-center gap-2 text-sm md:text-base md:text-gray-600 md:group-hover:text-white md:font-medium md:transition-colors md:duration-300"> */}
                                    {/* SVG Icon */}
                                    {/* <img className="w-5 h-5 md:w-6 md:h-8" src={logout} alt="Logout" /> */}
                                    {/* Text Hidden on Phone */}
                                    {/* <span className="hidden md:block">Logout</span> */}
                                {/* </span> */}
                            {/* </div> */}
                            {/* Tooltip */}
                            {/* <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 text-white bg-gray-800 text-xs md:text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"> */}
                                {/* Logout Now! */}
                            {/* </span> */}
                        {/* </NavLink>  */}

                        {/* Login Button */}
                        <NavLink to={'/login'} className="group relative">
                            <div
                                className="bg-blue-400 flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:border-blue-500 hover:shadow-fuchsia-300"
                            >
                                <span className="flex items-center gap-2 text-sm md:text-base md:text-gray-600 md:group-hover:text-white md:font-medium md:transition-colors md:duration-300">
                                    {/* SVG Icon */}
                                    <img className="w-5 h-5 md:w-6 md:h-8" src={user} alt="Login" />
                                    {/* Text Hidden on Phone */}
                                    <span className="hidden md:block">Login</span>
                                </span>
                            </div>
                            {/* Tooltip */}
                            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 text-white bg-gray-800 text-xs md:text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
                                Login Now!
                            </span>
                        </NavLink>
                    </div>


                </div>
            </div>
        </header>
    );
};

export default Header;
