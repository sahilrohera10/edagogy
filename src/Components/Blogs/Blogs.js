import React from "react";
import blog1 from "../../Assets/blog1.jpg";
import blog2 from "../../Assets/blog2.png";
import blog3 from "../../Assets/blog3.png";
import blog4 from "../../Assets/blog4.png";

export default function Blogs() {
  return (
    <>
      <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
        <p
          style={{ color: "#0A970D" }}
          className="mt-2.5 lg:w-1/2 lg:text-center text-3xl font-bold m-auto mb-16"
        >
          {" "}
          ~ LATEST NEWS & ARTICLES
        </p>{" "}
        <div className="lg:flex justify-center">
          <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            <img
              src={blog3}
              alt="fingerprint recognition"
              className="lg:w-full w-auto"
            />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-base leading-4 text-gray-500">
                    29 Nov 2022
                  </p>
                  <p className="text-base leading-none text-gray-500 ml-12">
                    5 min read
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width={64}
                    height={2}
                    viewBox="0 0 64 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 1H0" stroke="#6B7280" />
                  </svg>
                  <p className="text-base leading-none text-gray-500 ml-2">
                    Edagogy
                  </p>
                </div>
              </div>
              <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">
                Plan your IELTS to Perfection!
              </h1>
              <p className="text-base leading-6 text-gray-600 mt-2">
                Preparing for IELTS can feel intimidating with four modules to
                prepare for and seemingly endless amount of information
                available online to “help” you do so. But, how long do you
                really need to prepare for IELTS? And what should you cover if
                you only have one month or two months to prepare? This is what
                this blog will focus upon. Very briefly we will cater to the
                under mentioned concerned areas around IELTS: ....
                <br />
                <br />
                <span className="font-semibold">
                  a) Talk about where to start your preparation if you are an
                  absolute beginner:
                </span>
                <br />
                <br />
                Due to the vast amount of guidance and information shared
                online, it usually becomes a daunting task for the IELTS
                test-takers to figure out from where to start with their
                preparation process. In order to have a head-start, IELTS
                test-takers should analyze their level of language first.
                Depending upon the analyses and your score in the starting
                itself, you will have be able to better organize yourself in
                terms of your preparation....
              </p>
            </div>
          </div>
          <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
            <div className="lg:w-auto sm:w-1/2">
              <img src={blog2} alt="flying letters" className="w-full" />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-gray-500">
                      22 Jan 2023
                    </p>
                    <p className="text-base leading-none text-gray-500 ml-12">
                      5 min read
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="text-base leading-none text-gray-500 ml-2">
                      Edagogy
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                  PTE Academic Exam fee hike Jan’23
                </h1>
                <p className="text-base leading-6 text-gray-600 mt-2">
                  Are you a visa applicant looking for the perfect IELTS and PTE
                  institute in Zirakpur? Edagogy ....
                </p>
              </div>
            </div>
            <div className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
              <img src={blog4} alt="robotic arm" className="w-full" />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-gray-500">
                      10 Sept 2023
                    </p>
                    <p className="text-base leading-none text-gray-500 ml-12">
                      5 min read
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="text-base leading-none text-gray-500 ml-2">
                      Edagogy
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                  Tips For Writing Essay Writing
                </h1>
                <p className="text-base leading-6 text-gray-600 mt-2">
                  If you’re a great writer, you may have thought of writing
                  essays as an easy way to corretor ortografico online earn a
                  high grade..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
