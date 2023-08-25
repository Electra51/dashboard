
import { IoIosNotificationsOutline } from 'react-icons/io';
import profile from "../assets/images/profile.png";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-white flex justify-between items-center" style={{ padding: "10px 0px" }}>

            <div>
                <label className="relative block">
                    <span className="absolute inset-y-0 right-0 flex items-center px-1 py-1">
                        <svg className="h-5 w-5 fill-[#666666]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                            height="30" viewBox="0 0 30 30">
                            <path
                                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                            </path>
                        </svg>
                    </span>
                    <input
                        className="w-[320px] bg-[#F9F9F9] rounded-sm py-1 px-2 focus:outline-none placeholder:place-self-center"
                        placeholder="Search" type="text" />
                </label>
            </div>


            <div className="flex items-center my-10 gap-8">
                <button className="flex gap-2 items-center bg-yellow-500 px-2 py-1 rounded-md"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Name=Rocket">
                        <g id="Group 1">
                            <path id="Vector" d="M10.453 3.03129L11.1679 2.55466C11.6718 2.21876 12.3282 2.21876 12.8321 2.55466L13.547 3.03129C16.329 4.88595 18 8.00826 18 11.3518V16.5H6V11.3518C6 8.00826 7.671 4.88595 10.453 3.03129Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_2" d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#666666" strokeWidth="1.5" />
                            <path id="Vector_3" d="M6 11L3 14.1087L3 16.5H21V14.1087L18 11" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_4" d="M12 19V22" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_5" d="M8 20V21" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_6" d="M16 20V21" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </g>
                </svg>
                    <span className="text-[#1B2445]">Getting Started -0%</span></button>

                <IoIosNotificationsOutline className="text-2xl ml-3" />
                <Image src={profile} alt="avatar" height={30} width={30} className='ml-3' />
            </div>
        </div>
    )
}

export default Navbar