import React from "react";
import Image from "next/image";

export default function Services () {
    return (
        <section id="services">
            <div className="font-['Roboto'] h-[1742px]">

                <div className="mt-[100px]">
                    <h1 className="font-bold text-[56px] leading-[67.2px] ml-[500px]">Courses</h1>
                    <p className="font-normal text-[18px] leading-[27px] mt-6 ml-[480px]">
                        Your Ultimate Guide to learning</p>
                </div>

                <div className="mt-[60px]">
                    <ul className="ml-[440px] space-x-2">
                        <a href="/" className="hover:bg-white hover:text-black py-[8px] px-[16px] border-b border-b-[#676767] text-[16px] leading-[24px]">Popular</a>
                        <a href="/" className="hover:bg-white hover:text-black py-[8px] px-[16px] text-[16px] leading-[24px]">Recommended</a>
                        <a href="/" className="hover:bg-white hover:text-black py-[8px] px-[16px] text-[16px] leading-[24px]">Best Price</a>
                    </ul>
                </div>



                <div className="flex mt-16">
                    <div className="flex-1 bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px]">
                      <Image src={"/images/card1.png"} alt="card1" width={300} height={300}
                      className="w-[424px] h-[310px]"/>
                        <h1 className="font-semibold text-[14px] leading-[21px] mt-4 flex">Design
                            <Image src={"/images/Star.png"} alt="star" width={50} height={50} 
                            className="w-[40px] h-[25px] ml-[315px]"/>
                        </h1>
                        <h1 className="font-bold text-[24px] leading-[33.6px] mt-4">UX/UI Design 201</h1>
                        <p className="font-normal text-[16px] leading-[24px] mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                         elit. Suspendisse varius enim in eros.</p>
                         <button className="w-[117px] h-[40px] rounded-[5px] border border-black mt-4 p-2">
                            Enroll Now</button>
                         <button className="w-[77px] h-[40px] rounded-[5px] ml-4 font-medium text-[16px] leading-[24px] p-2">$400</button>
                    </div>

                    <div className="flex-1 bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] ml-6">
                    <Image src={"/images/card2.png"} alt="card1" width={300} height={300}
                      className="w-[424px] h-[310px]"/>
                        <h1 className="font-semibold text-[14px] leading-[21px] mt-4 ml-4 flex">Programmimg
                            <Image src={"/images/Star.png"} alt="star" width={50} height={50} 
                            className="w-[40px] h-[25px] ml-[250px]"/>
                        </h1>
                        <h1 className="font-bold text-[24px] leading-[33.6px] mt-4 ml-4">Introduction to Python</h1>
                        <p className="font-normal text-[16px] leading-[24px] mt-2 ml-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                         elit. Suspendisse varius enim in eros.</p>
                         <button className="w-[117px] h-[40px] rounded-[5px] border border-black mt-4 ml-4 p-2">
                            Enroll Now</button>
                         <button className="w-[77px] h-[40px] rounded-[5px] ml-4 font-medium text-[16px] leading-[24px] p-2">$400</button>
                    </div>


                    <div className="flex-1 bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] ml-6">
                    <Image src={"/images/card3.png"} alt="card1" width={300} height={300}
                      className="w-[424px] h-[310px]"/>
                        <h1 className="font-semibold text-[14px] leading-[21px] mt-4 ml-4 flex">Business
                            <Image src={"/images/Star.png"} alt="star" width={50} height={50} 
                            className="w-[40px] h-[25px] ml-[290px]"/>
                        </h1>
                        <h1 className="font-bold text-[24px] leading-[33.6px] mt-4 ml-4">Data Analysis for Beginners</h1>
                        <p className="font-normal text-[16px] leading-[24px] mt-2 ml-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                         elit. Suspendisse varius enim in eros.</p>
                         <button className="w-[117px] h-[40px] rounded-[5px] border border-black mt-4 ml-4 p-2">
                            Enroll Now</button>
                         <button className="w-[77px] h-[40px] rounded-[5px] ml-4 font-medium text-[16px] leading-[24px] p-2">$400</button>
                    </div>
                </div>




                <div className="flex mt-16">
                    <div className="flex-1 bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px]">
                    <Image src={"/images/card4.png"} alt="card1" width={300} height={300}
                      className="w-[424px] h-[310px]"/>
                        <h1 className="font-semibold text-[14px] leading-[21px] mt-4 flex">Art
                            <Image src={"/images/Star.png"} alt="star" width={50} height={50} 
                            className="w-[40px] h-[25px] ml-[315px]"/>
                        </h1>
                        <h1 className="font-bold text-[24px] leading-[33.6px] mt-4">Art Specialization</h1>
                        <p className="font-normal text-[16px] leading-[24px] mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                         elit. Suspendisse varius enim in eros.</p>
                         <button className="w-[117px] h-[40px] rounded-[5px] border border-black mt-4 p-2">
                            Enroll Now</button>
                         <button className="w-[77px] h-[40px] rounded-[5px] ml-4 font-medium text-[16px] leading-[24px] p-2">$400</button>
                    </div>

                    <div className="flex-1 bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] ml-6">
                    <Image src={"/images/card5.png"} alt="card1" width={300} height={300}
                      className="w-[424px] h-[310px]"/>
                        <h1 className="font-semibold text-[14px] leading-[21px] mt-4 ml-4 flex">Law
                            <Image src={"/images/Star.png"} alt="star" width={50} height={50} 
                            className="w-[40px] h-[25px] ml-[300px]"/>
                        </h1>
                        <h1 className="font-bold text-[24px] leading-[33.6px] mt-4 ml-4">Rule of Law</h1>
                        <p className="font-normal text-[16px] leading-[24px] mt-2 ml-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                         elit. Suspendisse varius enim in eros.</p>
                         <button className="w-[117px] h-[40px] rounded-[5px] border border-black mt-4 ml-4 p-2">
                            Enroll Now</button>
                         <button className="w-[77px] h-[40px] rounded-[5px] ml-4 font-medium text-[16px] leading-[24px] p-2">$400</button>
                    </div>

                    <div className="flex-1 bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] ml-6">
                    <Image src={"/images/card6.png"} alt="card1" width={300} height={300}
                      className="w-[424px] h-[310px]"/>
                        <h1 className="font-semibold text-[14px] leading-[21px] mt-4 ml-4 flex">Tech
                            <Image src={"/images/Star.png"} alt="star" width={50} height={50} 
                            className="w-[40px] h-[25px] ml-[290px]"/>
                        </h1>
                        <h1 className="font-bold text-[24px] leading-[33.6px] mt-4 ml-4">Introduction to webflow</h1>
                        <p className="font-normal text-[16px] leading-[24px] mt-2 ml-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                         elit. Suspendisse varius enim in eros.</p>
                         <button className="w-[117px] h-[40px] rounded-[5px] border border-black mt-4 ml-4 p-2">
                            Enroll Now</button>
                         <button className="w-[77px] h-[40px] rounded-[5px] ml-4 font-medium text-[16px] leading-[24px] p-2">$400</button>
                    </div>
                </div>

            <div className="mt-[120px] ml-[550px]">
                <button className="w-[152px] h-[40px] font-normal text-[16px] leading-[24px] border border-black rounded-[5px]">View All Courses</button>
            </div>


            </div>
        </section>
    )
}