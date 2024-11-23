import React from "react";
import Image from "next/image";

export default function Testimonial () {
    return (
        <section id="testimonial">
            <div className="font-['Roboto'] bg-[#F7F7F7] h-[830.89px]">
                <div className="pt-[60px]">
                    <h1 className="font-bold text-[48px] leading-[57.6px] ml-[60px]">Customer testimonials</h1>
                    <p className="font-normal text-[18px] leading-[27px] mt-4 ml-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="flex mt-[70px]">
                    <div className="flex-1 h-[321.89px] w-[362.67px] border border-black ml-[60px] pt-8 pl-8">
                        <Image src={"/images/Stars.png"} alt="stars" width={100} height={100}/>
                        <p className="font-normal text-[18px] leading-[27px] pt-6">
                            "Lorem ipsum dolor sit amet,<br />
                             consectetur adipiscing elit. <br />
                             Suspendisse varius enim in eros<br />
                              elementum tristique. Duis cursus, mi<br />
                               quis viverra ornare."</p>
                            
                                <Image src={"/images/test.png"} alt="test" height={100} width={100} 
                                className="w-[215px] h-[56px] mt-6"/>
                                 
                    </div>
                    <div className="flex-1 h-[321.89px] w-[362.67px] border border-black ml-[60px] pt-8 pl-8">
                    <Image src={"/images/Stars.png"} alt="stars" width={100} height={100}/>
                        <p className="font-normal text-[18px] leading-[27px] pt-6">
                            "Lorem ipsum dolor sit amet,<br />
                             consectetur adipiscing elit. <br />
                             Suspendisse varius enim in eros<br />
                              elementum tristique. Duis cursus, mi<br />
                               quis viverra ornare."</p>
                            
                                <Image src={"/images/test1.png"} alt="test" height={100} width={100} 
                                className="w-[215px] h-[56px] mt-6"/>
                    </div>

                    <div className="flex-1 h-[321.89px] w-[362.67px] border border-black ml-[60px] pt-8 pl-8 mr-[60px]">
                    <Image src={"/images/Stars.png"} alt="stars" width={100} height={100}/>
                        <p className="font-normal text-[18px] leading-[27px] pt-6">
                            "Lorem ipsum dolor sit amet,<br />
                             consectetur adipiscing elit. <br />
                             Suspendisse varius enim in eros<br />
                              elementum tristique. Duis cursus, mi<br />
                               quis viverra ornare."</p>
                            
                                <Image src={"/images/test2.png"} alt="test" height={100} width={100} 
                                className="w-[215px] h-[56px] mt-6"/>
                    </div> 
                </div>

                
                <div className="flex mt-[60px]">
                    <div className="flex-1">
                        <Image src={"/images/dots.png"} alt="dots" width={100} height={100}
                        className="ml-[60px] w-[72px] h-[8px]"/>
                    </div>
                    <div className="flex-1">
                        <Image src={"/images/arrows.png"} alt="arrows" width={100} height={100}
                        className="ml-[480px] w-[111px] h-[48px]"/>
                    </div>
                </div>

            </div>
        </section>
    )
}