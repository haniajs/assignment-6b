import React from "react";
import Image from "next/image";

export default function Footer () {
    return (
        <div className="font-['Roboto'] h-[684px]">

            <div className="flex pt-[100px]">
                <div className="flex-1">
                    <h1 className="font-semibold text-[18px] leading-[27px] ml-16">Subscribe to our newsletter</h1>
                    <p className="font-normal text-[16px] leading-[24px] ml-16 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="flex-1 ml-[310px]">
                    <button className="w-[265px] h-[48px] border border-black rounded-[5px] font-normal text-[16px] leading-[24px] pl-0">
                    Enter your email
                    </button>
                    <button className="w-[119px] h-[48px] border border-black rounded-[5px] font-normal text-[16px] leading-[24px] ml-6">
                    Subscribe
                    </button><br />
                    <p className="font-normal text-[12px] leading-[18px] mt-4 underline w-[400px]">By subscribing you agree to with our Privacy Policy</p>
                </div>
            </div>



            <div className="flex mt-[60px]">
                <div className="flex-1">
                    <Image src={"/images/logo.jpg"} alt="logo" width={100} height={100}
                    className="w-[130.6px] h-[40px] ml-16"/>
                </div>

                <div className="flex-1">
                    <h1 className="font-semibold text-[16px] leading-[24px]">Courses</h1>
                    <p className="font-normal text-[14px] leading-[21px] mt-6">Business</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Development</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Technology</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Design</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Programming</p>
                </div>

                <div className="flex-1">
                    <h1 className="font-semibold text-[16px] leading-[24px]">Resources</h1>
                    <p className="font-normal text-[14px] leading-[21px] mt-6">Career</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Resume</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Learning</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Interview Preparation</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Jobs</p>
                </div>

                <div className="flex-1">
                    <h1 className="font-semibold text-[16px] leading-[24px]">About Us</h1>
                    <p className="font-normal text-[14px] leading-[21px] mt-6">Contact</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Help/Support</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">FAQ</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Terms and Conditions</p>
                    <p className="font-normal text-[14px] leading-[21px] mt-4">Partners</p>
                </div>
            </div>

            

            <div className="mt-[80px] ml-16">
                <Image src={"/images/footer1.png"} alt="footer1" width={100} height={100}
                className="w-[1120px] h-[1px]"/>
            </div>




            <div className="flex">
                <div className="flex-1 mt-8">
                    <p className="font-normal text-[14px] leading-[21px] ml-[60px]">2023 Ddsgnr. All right reserved.</p>
                </div>
                <div className="flex-1 mt-8">
                    <p className="font-normal text-[14px] leading-[21px] underline">Privacy Policy</p>
                </div>
                <div className="flex-1 mt-8">
                    <p className="font-normal text-[14px] leading-[21px] underline pr-[100px] ">Terms of Service</p>
                </div>
                <div className="flex-1 mt-8">
                    <p className="font-normal text-[14px] leading-[21px] underline">Cookies Settings</p>
                </div>
                <div className="flex-1 mt-8">
                    <Image src={"/images/icons.jpg"} alt="icons" width={100} height={100}
                    className="ml-[30px] w-[132px] h-[24px]"/>
                </div>
            </div>

        </div>
    )
}