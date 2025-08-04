
import React from 'react';
// have to import landing page image later
import { APP_FEATURES } from '../utils/data'
import { useState } from 'react'
import { LuSparkles } from 'react-icons/lu';
import Modal from '../components/Modal';
import Login from './Auth/Login';
import Signup from './Auth/SignUp';

const LandingPage = () => {
    const [openAuthModal, setOpenAuthModel] = useState(false);
    const [currentPage, setCurrentPage] = useState("login");
    const handleCTA = () => { };
    return (
        <>
            <div className="w-full min-h-screen bg-[white]">
                <div className="w-full h-[500px] bg-amber-100 blur-[15px] absolute top -0 left-0"></div>
                <div className="container mx-auto  px-4 pt-6 z-10 pb-[200px] relative">
                    <header className='flex justify-between items-center mb-12'>
                        <div className='text-xl font-bold'>PrepBuddy AI </div>
                        <button
                            className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
                            onClick={() => { setOpenAuthModel(true) }}>Login / SignUp</button>
                    </header>
                    <div className="flex flex-col  items-center md:flex-row md:gap-20">
                        <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                            <div className="flex items-center justify-left mb-2">
                                <div className=" flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                                    <LuSparkles />AI Powered
                                </div>
                            </div>
                            <h1 className="text-4xl text-black font-medium mb-6 leading-tight">
                                Ace interviews with <br />
                                <span className=" text-transparent bg-clip-text bg-[linear-gradient(to_right,_#FF9324,_#FCD760)] font-semibold">
                                    AI-Powered
                                </span>


                                {" "} Learning
                            </h1>
                        </div>
                        <div>
                            <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                                Get role-specific questions, expand answers when you need them, deep diver into concepts and organise everything your way.
                                From preparation to performance, we are with you every step of the way.
                            </p>
                            <button
                                className="cursor-pointer bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black border  border-black transition-colors"
                                onClick={handleCTA}>Get Started</button>
                        </div>
                    </div>


                </div>

                <div>
                    <div className="text-2xl flex items-center justify-center font-bold mb-4">Features that make you shine</div>
                    <div className="w-full h-full bg-amber-100 blur-[15px] absolute top -0 left-0"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ml-10 mr-10 z-10 relative">
                        {APP_FEATURES.map((feature, index) => (
                            <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ">
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="font-medium text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center p-6 mt-5 z-10 relative">Made with ❤️ by Aditi Srivastava</div>

            <Modal
                isOpen={openAuthModal}
                onClose={() => {
                    setOpenAuthModel(false);
                    setCurrentPage("login");
                }}
                hideHeader
            >
                <div>
                    {currentPage === "login" && (
                        <Login setCurrentPage={setCurrentPage} />
                    )}
                    {currentPage === "signup" && (
                        <Signup setCurrentPage={setCurrentPage} />
                    )}
                </div>
            </Modal>
        </>
    )
}
export default LandingPage;