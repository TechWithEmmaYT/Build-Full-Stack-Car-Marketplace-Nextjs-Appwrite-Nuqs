import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import HeroFilter from "./_common/hero-filter";

const HeroSection = () => {
  return (
    <div
      className="w-full 
  min-h-[550px] mb-4
    "
      style={{
        background: `linear-gradient(160.29deg, #00b53f .67%,
         #00831e 100.93%)`,
      }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col
      lg:flex-row items-center justify-between gap-8 py-8
      lg:py-16
      "
      >
        <div className="flex-1 px-10 md:px-0">
          <Card className="!max-w-[29rem] w-full shadow-sm">
            <CardContent className="py-10 px-5">
              <div className="w-full flex flex-col items-center">
                <h2
                  className="
                text-[30px] md:text-[46px]
                font-extrabold leading-10 md:leading-[50px]
                              "
                >
                  <span>
                    Find the Car You <br /> Want{" "}
                  </span>
                  <span className="text-primary">Your Way</span>
                </h2>
                <HeroFilter />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 lg:ml-auto">
          <div
            className="relative w-[350px] sm:w-[400px] md:w-[500px]
                   lg:w-[700px] mt-5 md:mt-8 lg:mt-0
                      "
          >
            <Image
              src="/images/hero-car.png"
              alt=""
              className="object-cover w-full h-auto transform
              scale-100 md:scale-100 lg:scale-110"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
