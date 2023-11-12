import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/companyLogo.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () =>{

    const [nav, setNav] = useState(false);

    const activeLink = "text-blue-200"
    
    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div>
            <div id="navbar" className="flex justify-between items-center h-24 w-full mx-auto px-4 text-white">                
                <div>
                    <NavLink to="/">
                        <img className="w-[120px] my-8 sm:w-[100px] md:w-[100px] items-start" src={Logo} alt="/" />
                    </NavLink>                    
                </div>               
                
                <ul className="hidden md:flex font-bold">
                    <li className="p-4">
                        <NavLink                         
                            to="/"    
                            className={({ isActive }) => isActive ? activeLink : ''}                    
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button>
                                    About                                
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Taiphake Community
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Nam-Phake Village
                                        </a>
                                    )}
                                    </Menu.Item>
                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    <li className="p-4">
                        <NavLink                         
                            to="/services"                        
                            className={({ isActive }) => isActive ? activeLink : ''}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink                         
                            to="/career"                        
                            className={({ isActive }) => isActive ? activeLink : ''}
                        >
                            Career
                        </NavLink>
                    </li>                
                    <li className="p-4">
                        <NavLink
                            to="/contact"                        
                            className={({ isActive }) => isActive ? activeLink : ''}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}                
                </div>
                <div className={nav ? "fixed left-0 top-0 w-[85%] h-[96%] z-20 border-r border-r-gray-900 bg-[#1b0424] ease-in-out duration-500" : "fixed left-[-100%]"}>                    
                    <img className="w-[90px] items-start" src={Logo} />
                    
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/"
                                onClick={handleNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className='uppercase'>
                                    About                                
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute -left-4 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Taiphake Community
                                        </a>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Nam-Phake Village
                                        </a>
                                    )}
                                    </Menu.Item>
                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/services"
                                onClick={handleNav}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/career"
                                onClick={handleNav}
                            >
                                Career
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink
                                to="/contact"
                                onClick={handleNav}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Navbar;