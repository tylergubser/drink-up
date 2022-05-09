import React from 'react'
import { NavLink } from "react-router-dom";
// import loginSVG from "./images/loginSVG.svg"
// import homeSVG from "./images/homeSVG.svg"
import LoginButton from "./LoginButton.js"
import LogoutButton from "./LogoutButton.js"
import { GiMartini } from 'react-icons/gi';


function Navbar({ isAuthenticated }) {
    return (
        <header className="shadow-sm">
            <div
                className="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto "
            >
                <div className="flex flex-1 w-0 lg:hidden sm:text-center">
                    <NavLink to="/">Drink Up<GiMartini/></NavLink>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="hidden mb-0 lg:flex">
                        <NavLink to="/">Drink Up<GiMartini/></NavLink>
                    </div>
                </div>
                <ul
                    className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
                >
                    {isAuthenticated ?
                     <li className="relative">
                         <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/orders">Orders</NavLink>
                        </div>
                    </li>
                    : null}
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/menu">Menu</NavLink>
                        </div>
                    </li>
                   {isAuthenticated ?
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/profile">Profile</NavLink>
                        </div>
                    </li>
                    : null}
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/about">About</NavLink>
                        </div>
                    </li>
                    {isAuthenticated ?
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/qr-code">QR Code</NavLink>
                        </div>
                    </li>
                    : null}
                   
                   
                    <li className="relative">
                        {isAuthenticated
                            ?
                            <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                
                                <LogoutButton />
                            </div>
                            :
                            <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                
                                <LoginButton/>
                            </div>
                        }
                    </li>
                </ul>
            </div>

            {/* mobile view */}
            <div className="border-t border-gray-100 lg:hidden">
                <ul
                    className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
                >
                     {isAuthenticated ?
                     <li className="relative">
                         <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/orders">Orders</NavLink>
                        </div>
                    </li>
                    : null}
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/menu">Menu</NavLink>
                        </div>
                    </li>
                   
                    {isAuthenticated ?
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/profile">Profile</NavLink>
                        </div>
                    </li>
                    : null}
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/about">About</NavLink>
                        </div>
                    </li>
                    {isAuthenticated ?
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/qr-code">QR Code</NavLink>
                        </div>
                    </li>
                    : null}
                    {/* <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/order-menu">Order Menu</NavLink>
                        </div>
                    </li> */}
                   
                    <li className="relative">
                        {isAuthenticated
                            ?
                            <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                <LogoutButton />
                            </div>
                            :
                            <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                <LoginButton/>
                            </div>
                        }
                    </li>
                </ul>
            </div>
            {/* end ofmobile view */}
        </header>
    )
}

export default Navbar