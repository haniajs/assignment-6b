import React from "react";

export default function Achievement () {
    return (
        <section id="achievement">
          <div className="bg-[#FFFFFF] h-[488px] font-['Roboto']">
            <div>
                <h1 className="font-bold text-[48px] leading-[57.6px] ml-[450px]">Our Achivements</h1>
                <p className="font-normal text-[18px] leading-[27px] mt-8 ml-[140px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis 
                  viverra </p>
                  <p className="font-normal text-[18px] leading-[27px] ml-[380px]">
                    ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>

            <div className="flex mt-[45px]">
              <div className="flex-1 ml-[150px]">
                <h1 className="font-bold text-[40px] leading-[48px]">+200</h1>
                <p className="font-normal text-[16px] leading-[24px] ml-[20px] mt-2">Courses</p>
              </div>

              <div className="flex-1">
                <h1 className="font-bold text-[40px] leading-[48px]">50K</h1>
                <p className="font-normal text-[16px] leading-[24px] ml-[8px] mt-2">Mentors</p>
              </div>

              <div className="flex-1">
                <h1 className="font-bold text-[40px] leading-[48px]">370k</h1>
                <p className="font-normal text-[16px] leading-[24px] ml-[8px] mt-2">Students</p>
              </div>

              <div className="flex-1">
                <h1 className="font-bold text-[40px] leading-[48px]">100+</h1>
                <p className="font-normal text-[16px] leading-[24px] ml-[2px] mt-2">Recognition</p>
              </div>

            </div>



          </div>
        </section>
    )
}