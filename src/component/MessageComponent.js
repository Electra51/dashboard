import React, { useState } from 'react'
import logo1 from '../assets/images/profile.png'
import Image from 'next/image';
const MessageComponent = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div >
            <div className="flex justify-between items-center">
                <h2 className='mt-10 pl-5 text-[#666666]'>Messages</h2>
                <div className='px-3 py-1 text-white rounded-md' style={{ background: "blue" }}>+ New Chat</div>
            </div>

            <div className="flex items-start">
                <div className='bg-white rounded-sm' style={{ borderRight: "1px solid #F4F4F4", marginTop: "17px", width: "450px", }}>


                    {/* tab */}
                    <div className='flex justify-between gap-4' style={{ padding: "15px 15px" }}>
                        <div className='flex gap-4'>
                            <div className={toggleState == 1 ? "bg-gray-300 text-gray-900 px-4 py-1 rounded cursor-pointer" : " text-gray-800 px-4 py-1 border border-gray-400 rounded cursor-pointer"} onClick={() => toggleTab(1)}>
                                Inbox
                            </div>

                            <div className={toggleState == 2 ? "bg-gray-300 text-gray-900 px-4 py-1 rounded cursor-pointer" : "text-gray-800 px-4 py-1 border border-gray-400 rounded cursor-pointer"} onClick={() => toggleTab(2)}>
                                Groups
                            </div>
                        </div>

                        <div className={toggleState == 3 ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded cursor-pointer" : "text-gray-800 px-2 py-1 border border-gray-400 rounded cursor-pointer"} onClick={() => toggleTab(3)}>
                            <svg className="h-5 w-5 fill-[#666666]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                height="30" viewBox="0 0 30 30">
                                <path
                                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    {/* content */}
                    <div className="flex justify-between" style={{ borderTop: "1px solid #F4F4F4", marginTop: "8px", padding: "15px" }}>
                        <p>New</p>
                        <p className='text-blue-700'>Mark all as read</p>
                    </div>


                    <div className={toggleState == 1 ? "text-gray-900" : "hidden"}>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 '>
                            <div className='flex items-center'><Image className="w-10 h-10 rounded" style={{ height: "40px", weight: "40px", }} src={logo1} alt="Default avatar" />
                                <div>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 mt-1'>
                            <div className='flex items-center '><Image className="w-10 h-10 rounded" style={{ height: "40px", weight: "40px", }} src={logo1} alt="Default avatar" />
                                <div>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 mt-1'>
                            <div className='flex items-center'><Image className="w-10 h-10 rounded" style={{ height: "40px", weight: "40px", }} src={logo1} alt="Default avatar" />
                                <div>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <p className='px-2 mt-1'>Older</p>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300'>
                            <div className='flex items-center'><Image className="w-10 h-10 rounded" style={{ height: "40px", weight: "40px", }} src={logo1} alt="Default avatar" />
                                <div>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300'>
                            <div className='flex items-center'><Image className="w-10 h-10 rounded" style={{ height: "40px", weight: "40px", }} src={logo1} alt="Default avatar" />
                                <div>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                    </div>
                    <div className={toggleState == 2 ? "text-gray-900" : "hidden"}>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 '>
                            <div className='flex'>
                                <div className="flex mb-5 relative">
                                    <Image className=" w-10 h-10 rounded" style={{ height: "30px", weight: "20px", position: "absolute", left: "16px", top: "15px" }} src={logo1} alt="Default avatar" />
                                    <Image className="w-10 h-10 rounded" style={{ height: "30px", weight: "20px", }} src={logo1} alt="Default avatar" />
                                </div>

                                <div style={{ padding: "0 18px" }}>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 '>
                            <div className='flex'>
                                <div className="flex mb-5 relative">
                                    <Image className=" w-10 h-10 rounded" style={{ height: "30px", weight: "20px", position: "absolute", left: "16px", top: "15px" }} src={logo1} alt="Default avatar" />
                                    <Image className="w-10 h-10 rounded" style={{ height: "30px", weight: "20px", }} src={logo1} alt="Default avatar" />
                                </div>

                                <div style={{ padding: "0 18px" }}>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 '>
                            <div className='flex'>
                                <div className="flex mb-5 relative">
                                    <Image className=" w-10 h-10 rounded" style={{ height: "30px", weight: "20px", position: "absolute", left: "16px", top: "15px" }} src={logo1} alt="Default avatar" />
                                    <Image className="w-10 h-10 rounded" style={{ height: "30px", weight: "20px", }} src={logo1} alt="Default avatar" />
                                </div>

                                <div style={{ padding: "0 18px" }}>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <p className='px-2 mt-1'>Older</p>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 '>
                            <div className='flex'>
                                <div className="flex mb-5 relative">
                                    <Image className=" w-10 h-10 rounded" style={{ height: "30px", weight: "20px", position: "absolute", left: "16px", top: "15px" }} src={logo1} alt="Default avatar" />
                                    <Image className="w-10 h-10 rounded" style={{ height: "30px", weight: "20px", }} src={logo1} alt="Default avatar" />
                                </div>

                                <div style={{ padding: "0 18px" }}>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                        <div className='flex justify-between items-center w-full   py-2 px-2 hover:bg-gray-300 '>
                            <div className='flex'>
                                <div className="flex mb-5 relative">
                                    <Image className=" w-10 h-10 rounded" style={{ height: "30px", weight: "20px", position: "absolute", left: "16px", top: "15px" }} src={logo1} alt="Default avatar" />
                                    <Image className="w-10 h-10 rounded" style={{ height: "30px", weight: "20px", }} src={logo1} alt="Default avatar" />
                                </div>

                                <div style={{ padding: "0 18px" }}>
                                    <h2>Rickchard Nensole</h2>
                                    <p>hello! how are you man?</p>
                                </div></div>
                            <p className='pl-8'>1h</p>
                        </div>
                    </div>
                    <div className={toggleState == 3 ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded" : "hidden"}>
                        hello
                    </div>




                </div>
                <div className='w-full bg-white' style={{ marginTop: "17px" }}>
                    👩‍⚖️
                </div>
            </div>
        </div >
    )
}

export default MessageComponent