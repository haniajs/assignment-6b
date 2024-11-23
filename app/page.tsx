import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";
import Image from "next/image";
import Courses from "@/components/Courses";
import Achievement from "@/components/Achievement";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home () {
  return (
    <div>
     <Start />
     <br />
      <Navbar />
      <Hero />
      <div className="flex font-['Roboto'] h-[228px] bg-[#F7F7F7]">
      <div>
          <h5 className="font-bold text-2xl leading-[33.6px] pt-[85px] pl-2 flex">
            Trusted by 2000+ companies<br /> worldwide.</h5></div>
          <div>
            <Image src={"/images/logos.png"} alt="logo1" height={200} width={200} 
            className="w-[880px] h-[56px] mt-[95px] ml-[80px]"/>
      </div>
      </div>
      <Courses />
      <Achievement />
      <Achievement />
      <Services />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}