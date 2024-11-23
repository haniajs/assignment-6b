import React from "react";
import Image from "next/image";

export default function About () {
    return (
        <section id="about">
            <div className="bg-[#F7F7F7] h-[895px] font-['Roboto']">

                <div className="pt-[100px]">
                    <h1 className="font-bold text-[48px] leading-[57.6px] ml-[500px]">Our team</h1>
                    <p className="font-normal text-[18px] leading-[27px] mt-6 ml-[400px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                

                <div className="flex">
                    <div className="flex-1 pt-[90px]">
                        <Image src={"/images/about1.png"} alt="about1" height={100} width={100}
                        className="w-[80px] h-[80px] ml-[160px]"/>
                        <h1 className="font-semibold text-[20px] leading-[30px] mt-6 ml-[140px]">James Nduku</h1>
                        <p className="font-normal text-[18px] leading-[27px] mt-1 ml-[115px]">Marketing Coordinator</p>
                        <Image src={"/images/about7.png"} alt="about7" height={100} width={100} 
                        className="mt-6 ml-[140px]"/>
                    </div>

                    <div className="flex-1 pt-[90px]">
                    <Image src={"/images/about2.png"} alt="about1" height={100} width={100}
                        className="w-[80px] h-[80px] ml-[160px]"/>
                        <h1 className="font-semibold text-[20px] leading-[30px] mt-6 ml-[120px]">Joseph Munyambu</h1>
                        <p className="font-normal text-[18px] leading-[27px] mt-1 ml-[130px]">Nursing Assistant</p>
                        <Image src={"/images/about7.png"} alt="about7" height={100} width={100} 
                        className="mt-6 ml-[150px]"/>
                    </div>

                    <div className="flex-1 pt-[90px]">
                    <Image src={"/images/about3.png"} alt="about1" height={100} width={100}
                        className="w-[80px] h-[80px] ml-[160px]"/>
                        <h1 className="font-semibold text-[20px] leading-[30px] mt-6 ml-[125px]">Joseph Ngumbau</h1>
                        <p className="font-normal text-[18px] leading-[27px] mt-1 ml-[135px]">Medical Assistant</p>
                        <Image src={"/images/about7.png"} alt="about7" height={100} width={100} 
                        className="mt-6 ml-[150px]"/>
                    </div>
                </div>




                <div className="flex">
                    <div className="flex-1 pt-[80px]">
                    <Image src={"/images/about4.png"} alt="about1" height={100} width={100}
                        className="w-[80px] h-[80px] ml-[160px]"/>
                        <h1 className="font-semibold text-[20px] leading-[30px] mt-6 ml-[120px]">Erick Kipkemboi</h1>
                        <p className="font-normal text-[18px] leading-[27px] mt-1 ml-[145px]">Web Designer</p>
                        <Image src={"/images/about7.png"} alt="about7" height={100} width={100} 
                        className="mt-6 ml-[145px]"/>
                    </div>

                    <div className="flex-1 pt-[80px]">
                    <Image src={"/images/about5.png"} alt="about1" height={100} width={100}
                        className="w-[80px] h-[80px] ml-[160px]"/>
                        <h1 className="font-semibold text-[20px] leading-[30px] mt-6 ml-[130px]">Stephen Kerubo</h1>
                        <p className="font-normal text-[18px] leading-[27px] mt-1 ml-[130px]">President of Sales</p>
                        <Image src={"/images/about7.png"} alt="about7" height={100} width={100} 
                        className="mt-6 ml-[150px]"/>
                    </div>

                    <div className="flex-1 pt-[80px]">
                    <Image src={"/images/about6.png"} alt="about1" height={100} width={100}
                        className="w-[80px] h-[80px] ml-[160px]"/>
                        <h1 className="font-semibold text-[20px] leading-[30px] mt-6 ml-[150px]">John Leboo</h1>
                        <p className="font-normal text-[18px] leading-[27px] mt-1 ml-[155px]">Dog Trainer</p>
                        <Image src={"/images/about7.png"} alt="about7" height={100} width={100} 
                        className="mt-6 ml-[150px]"/>
                    </div>
                </div>



            </div>
        </section>
    )
}