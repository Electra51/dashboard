import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { CiDark } from 'react-icons/ci'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import logo from '../assets/images/logo.png'
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai'
import { Switch } from '@material-tailwind/react';


const Menus = [
    {
        title: 'Feed', src: 'Feed', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Name=Feed">
                <path id="Vector" d="M19.5 3H4.5C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3Z" stroke="#666666" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_2" d="M3 8.5H21" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M8.5 21V8.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    },
    {
        title: 'Messages', src: 'Chat', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Name=Massage">
                <path id="Vector" d="M16.5 19H11V15H18V11H22V19H19.5L18 20.5L16.5 19Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_2" d="M2 3H18V15H8.5L6.5 17L4.5 15H2V3Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M9.5 9H10" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                <path id="Vector_4" d="M13 9H13.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                <path id="Vector_5" d="M6 9H6.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
            </g>
        </svg>

    },
    {
        title: 'Members', src: 'User', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Name=Members">
                <path id="Vector" d="M9.5 10C11.433 10 13 8.433 13 6.5C13 4.56701 11.433 3 9.5 3C7.567 3 6 4.56701 6 6.5C6 8.433 7.567 10 9.5 10Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_2" d="M16.3047 3.5C17.3211 4.11245 18.0009 5.22685 18.0009 6.5C18.0009 7.77315 17.3211 8.88755 16.3047 9.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M2 20.4V21H17V20.4C17 18.1598 17 17.0397 16.5641 16.184C16.1806 15.4314 15.5686 14.8195 14.816 14.436C13.9603 14 12.8402 14 10.6 14H8.4C6.1598 14 5.0397 14 4.18404 14.436C3.43139 14.8195 2.81947 15.4314 2.43598 16.184C2 17.0397 2 18.1598 2 20.4Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_4" d="M22.0005 21V20.4C22.0005 18.1598 22.0005 17.0397 21.5645 16.1841C21.181 15.4314 20.5691 14.8195 19.8164 14.436" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    },
    {
        title: 'Shop', src: 'Calendar', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Name=Bag">
                <path id="Vector" d="M17.5 6H6.5C5.67157 6 5 6.67157 5 7.5V19.5C5 20.3284 5.67157 21 6.5 21H17.5C18.3284 21 19 20.3284 19 19.5V7.5C19 6.67157 18.3284 6 17.5 6Z" stroke="#666666" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_2" d="M15 9V5C15 3.34315 13.6568 2 12 2C10.3432 2 9 3.34315 9 5V9" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    },
    {
        title: 'Collections', gap: true, src: 'Calendar', icon: <AiOutlinePlus />
    },
    {
        title: 'Collection name one',
        src: 'one',

        icon: "",
        subMenus: [
            {
                title: 'Service 1',
                src: '/services/services1',

                cName: 'sub-nav',
            },
            {
                title: 'Service 2',
                src: '/services/services2',

                cName: 'sub-nav',
            },
            {
                title: 'Service 3',
                src: '/services/services3',
            },
        ],
    }


];

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [openDot, setOpenDot] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
    };
    const imageStyle = {
        borderRadius: '19%',
    }
    return (
        <div className=" h-screen flex items-end justify-end ">
            <button
                className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300"
                onClick={toggleSidebar}
            >
                <span className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 m-auto"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
                        />
                    </svg>
                </span>
            </button>

            <div
                className={` ${open ? 'w-48 px-2' : 'w-0 '
                    } lg:w-[230px] bg-white h-screen relative duration-500`}
            >
                <div className="flex justify-between items-center mt-3">
                    <div className='flex items-center gap-2'>
                        <Image src={logo} height={40} weight={40} alt="Nav logo" style={imageStyle} /> <h2 className={`text-[#1F2128] font-medium text-xl text-center duration-200 ${!open && 'invisible'
                            }`}>1 Social Club</h2>
                    </div>
                    <div className="relative px-1 rounded-md hover:bg-gray-200 duration-300">
                        <BiDotsHorizontalRounded onClick={() => setOpenDot(!openDot)}
                        />
                        {openDot && open && <div
                            className='z-10 p-3 absolute top-7 left-26 w-56 border rounded divide-y bg-white shadow-md'
                        >
                            <p className='px-3 py-1 hover:bg-gray-300 text-left ml-2 rounded-md text-[#666666]'>
                                Community Setting
                            </p>
                            <div className='px-4 py-1 hover:bg-gray-300 text-left mt-2 rounded-md flex justify-between items-center'>
                                <CiDark className='text-2xl' />
                                <p className='text-[12px] text-[#666666]'>Switch to dark mode</p>
                                <Switch className='text-xl' />
                            </div>
                        </div>
                        }

                    </div>

                </div>
                <ul className="pt-6">
                    {Menus?.map((Menu, index) => (
                        <>
                            <li
                                key={index}
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-200 text-[#666666] text-sm items-center gap-x-4 
                                ${Menu.gap ? 'mt-9' : 'mt-1'}  `}
                            >
                                {Menu.icon ? Menu.icon : ' '}
                                <span className="flex-1">{Menu.title}</span>
                                {Menu.subMenus && (
                                    <BsChevronDown
                                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                                        className={`${subMenuOpen && 'rotate-180'}`}
                                    />
                                )}
                            </li>
                            {Menu.subMenus && subMenuOpen && open && (
                                <ul>
                                    {Menu?.subMenus?.map((subMenuItem, idx) => (
                                        <li
                                            key={idx}
                                            className="flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1"
                                        >
                                            {subMenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;