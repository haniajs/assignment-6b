import React from "react";
import Image from "next/image";

export default function Courses () {
    return (
        <section id="courses">
         <div className="font-['Roboto'] bg-[#FFFFFF] h-[1049px]">
            <div className="mt-[120px]">
                <h1 className="font-bold text-5xl leading-[57.6px] ml-[300px]">Explore Courses By Category</h1>
                <p className="font-normal text-lg leading-[27px] mt-6 ml-[300px]">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>

            <div className="flex mt-[80px]">

                <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <div>
                        <Image src={"/images/tool1.png"} alt="tool1" height={100} width={100}
                        className="flex-1 mt-4 ml-3"/>
                    </div>
                    <div>
                        <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
                        Design & Development</h1>
                        <p className="font-normal text-[18px] leading-[27px] ml-8">
                            50+ Courses Available</p>
                    </div>
                </div>


                <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px] ml-4">
                  <div>
                    <Image src={"/images/tool2.png"} alt="tool1" height={100} width={100}
                    className="flex-1 mt-4 ml-3"/>
                    </div>
                    <div>
                        <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
                        Marketing</h1>
                        <p className="font-normal text-[18px] leading-[27px] ml-8">
                            50+ Courses Available</p>
                    </div>
                </div>


                <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px] ml-4">
                <div>
                    <Image src={"/images/tool3.png"} alt="tool1" height={100} width={100}
                    className="flex-1 mt-4 ml-3"/>
                    </div>
                    <div>
                        <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
                        Development</h1>
                        <p className="font-normal text-[18px] leading-[27px] ml-8">
                            50+ Courses Available</p>
                    </div>
                </div>
            </div>




            <div className="flex mt-16">

             <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                <div>
                  <Image src={"/images/tool4.png"} alt="tool1" height={100} width={100}
                  className="flex-1 mt-4 ml-3"/>
                 </div>
                <div>
                  <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
                  Communication</h1>
                  <p className="font-normal text-[18px] leading-[27px] ml-8">
                    50+ Courses Available</p>
                </div>
            </div>


            <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px] ml-4">
              <div>
                <Image src={"/images/tool5.png"} alt="tool1" height={100} width={100}
                className="flex-1 mt-4 ml-3"/>
              </div>
             <div>
                <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
                Digital Marketing</h1>
                <p className="font-normal text-[18px] leading-[27px] ml-8">
                 50+ Courses Available</p>
              </div>
            </div>


            <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px] ml-4">
               <div>
                <Image src={"/images/tool6.png"} alt="tool1" height={100} width={100}
                className="flex-1 mt-4 ml-3"/>
              </div>
              <div>
                 <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
                 Self Development</h1>
                 <p className="font-normal text-[18px] leading-[27px] ml-8">
                  50+ Courses Available</p>
              </div>
              </div>
            </div>



            <div className="flex mt-16">

              <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                <div>
                  <Image src={"/images/tool7.png"} alt="tool1" height={100} width={100}
                   className="flex-1 mt-4 ml-3"/>
                </div>
            <div>
               <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
               Business</h1>
               <p className="font-normal text-[18px] leading-[27px] ml-8">
                50+ Courses Available</p>
            </div>
            </div>


            <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px] ml-4">
              <div>
                <Image src={"/images/tool8.png"} alt="tool1" height={100} width={100}
                 className="flex-1 mt-4 ml-3"/>
              </div>
              <div>
                <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
                Finance</h1>
                <p className="font-normal text-[18px] leading-[27px] ml-8">
                 50+ Courses Available</p>
              </div>
              </div>


         <div className="flex-1 flex w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px] ml-4">
            <div>
              <Image src={"/images/tool9.png"} alt="tool1" height={100} width={100}
              className="flex-1 mt-4 ml-3"/>
            </div>
            <div>
              <h1 className="flex-1 font-semibold text-[20px] leading-[30px] mt-10 ml-8">
              Consulting</h1>
              <p className="font-normal text-[18px] leading-[27px] ml-8">
               50+ Courses Available</p>
           </div>
            </div>
        </div>

        <div className="mt-16 ml-[560px]">
            <button className="w-[155px] h-[48px] border border-black border-solid rounded-[5px] font-normal text-[16px] leading-[24px] ">
                View All Courses</button>
        </div>

         </div>
        </section>
    )
}