import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import s1 from "../../Assets/s1.png";
import s2 from "../../Assets/s2.png";
import s3 from "../../Assets/s3.png";
import s4 from "../../Assets/s4.png";
import s5 from "../../Assets/s5.png";
import s6 from "../../Assets/s6.png";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Success() {
  return (
    <>
      <p
        style={{ color: "#0A970D" }}
        className="mt-2.5 lg:w-1/2 lg:text-center text-3xl font-bold m-auto"
      >
        {" "}
        ~ SUCCESS STORIES
      </p>{" "}
      <div
        style={{ background: "#3C3187" }}
        className="2xl:mx-auto 2xl:container flex justify-center p-10"
      >
        <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
          {/* Carousel for Small-Sized Screen */}
          <CarouselProvider
            className="relative block sm:hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={6}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="js-flickity flex justify-center items-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <Slider>
                <Slide index={0}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s1}
                        alt="sitting area"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s1}
                        alt="sitting area"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s2}
                        alt="chairs"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s2}
                        alt="chairs"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s3}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s3}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s4}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s4}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s5}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s5}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s6}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s6}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
              </Slider>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for Medium and Large-Sized Screen */}
          <CarouselProvider
            className="relative hidden sm:block"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={6}
            visibleSlides={1}
            step={1}
            infinite={true}
            currentSlide={1}
          >
            <div className="js-flickity flex justify-center items-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <Slider className="carousel__sliderLarge">
                <Slide className="carousel__inner-slideLarge" index={0}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s1}
                        alt="sitting area"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s1}
                        alt="sitting area"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={1}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s2}
                        alt="chairs"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s2}
                        alt="chairs"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={2}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s3}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s3}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={3}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s4}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s4}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={4}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s5}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s5}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide className="carousel__inner-slideLarge" index={5}>
                  <div className="gallery-cell w-full h-full">
                    <div className="relative w-full h-full lg:block hidden">
                      <img
                        src={s6}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-full lg:hidden">
                      <img
                        src={s6}
                        alt="chair"
                        className="object-center object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </Slide>
              </Slider>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
        <style>
          {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
        </style>
      </div>
    </>
  );
}
