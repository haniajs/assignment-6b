import React from "react";
import Image from "next/image";

export default function Navbar () {
    return (
        <>
        <nav className="bg-[#F7F7F7] font-['Roboto']">
            <div className="flex w-full h-[72px] border-b border-b-[#676767]">
            <div className="justify-between items-center pt-4 pl-12">
                <Image src={"/images/logo.jpg"} alt="logo" width={150} height={200}/>
            </div>

            <div className="h-[64px] justify-between items-center pt-4">
                <ul className="bg-white ml-[90px] space-x-12 h-[40px]">
                    <a href="/" className="border-b border-b-[#000000] hover:bg-white hover:text-black leading-6 font-normal ">Home</a>
                    <a href="#courses" className="justify-between items-center hover:bg-white hover:text-black leading-6 font-normal ">Courses</a>
                    <a href="#services" className="justify-between items-center hover:bg-white hover:text-black leading-6 font-normal">Services</a>
                    <a href="#achievement" className="justify-between items-center hover:bg-white hover:text-black leading-6 font-normal">Achievement</a>
                    <a href="#about" className="justify-between items-center hover:bg-white hover:text-black leading-6 font-normal">About Us</a>
                    <a href="#testimonial" className="justify-between items-center hover:bg-white hover:text-black leading-6 font-normal">Testimonial</a>
                    <button className="bg-white border border-[#000000] w-[100px] h-[40px] rounded-[5px]">Login</button>
                    <button className="bg-[#000000] text-white border border-[#000000] w-[100px] h-[40px] rounded-[5px]">Sign Up</button>
                </ul>
            
            </div>
            </div>
        </nav>
        </>
    )
}