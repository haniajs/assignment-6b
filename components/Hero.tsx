import React from "react";
import Image from "next/image";

export default function Hero () {
    return (
        <main className="flex font-['Roboto'] h-[800px]">
            <div className="flex-1">
                <h1 className="font-bold text-[56px] leading-[67.2px] pt-[290px] pl-[80px]">Learn new skills<br /> online with ease</h1>
                <p className="font-normal text-[18px] leading-[27px] pt-6 pl-[80px]">
                Discover a wide range of courses covering a variety of<br /> subjects, taught by expert instructors.</p>
                <button className="h-[48px] mt-8 ml-[80px] border rounded-[5px] bg-[#000000] text-white text-[16px] leading-[24px] p-3">
                    Start learning now</button>
                <button className="h-[48px] ml-[10px] border rounded-[5px] border-black text-[16px] leading-[24px] p-3">Explore Courses</button>
            </div>
            <div className="flex-1">
                <Image src={"/images/banner.jpg"} alt="banner" width={300} height={300} className="h-[800px] w-[640px]"/>
            </div>
        </main>
    )
}