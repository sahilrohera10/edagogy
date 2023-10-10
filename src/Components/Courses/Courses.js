import React from "react";
import "./Courses.css";

const Courses = () => (
  <div>
    <section id="courses" className="px-6 xl:px-0">
      <div className="mt-20 mx-auto container">
        <div className="flex flex-col lg:items-center justify-center w-full">
          <p
            style={{ color: "#0A970D" }}
            className="mt-2.5 lg:w-1/2 lg:text-center text-2xl font-bold"
          >
            {" "}
            ~OUR COURSES
          </p>{" "}
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Book your free assessment test today!
          </h1>
        </div>
        <div className="flex items-center justify-center w-4/6 m-auto">
          <div className="pt-14">
            <div className="container mx-auto">
              <div className="md:flex flex-wrap mb-12 justify-between sm:justify-center ">
                <div className=" w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full mb-4 px-2 p-10 ">
                  <div className=" shadow-lg group hover:bg-indigo-800 py-5 px-4 bg-white border border-gray-200shadow rounded-lg ">
                    <h4 className="text-2xl text-indigo-700 group-hover:text-white font-semibold pb-8 ">
                      IELTS
                    </h4>

                    <ul className="flex flex-col mb-6">
                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Highly Trained Faculty
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Duration: 1 Month & 2 Month Courses
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 2 Batches ( Morning & Evening)
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Free Study Material
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Both CBT /PBT (Computer based / Paper based)
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Weekly Mock Test
                      </p>
                    </ul>
                    <p className="text-md text-indigo-700 group-hover:text-white relative pl-3 ">
                      <span className="text-2xl font-semibold ">01</span>
                    </p>
                  </div>
                </div>
                <div className=" w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full mb-4 px-2 p-10">
                  <div className="shadow-lg py-5 px-4 group hover:bg-indigo-800 border border-gray-200shadow rounded-lg text-left">
                    <h4 className="text-2xl text-indigo-700 group-hover:text-white font-semibold pb-8">
                      PTE
                    </h4>
                    <ul className="flex flex-col mb-6">
                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Highly Trained Faculty
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 AI Software - Quick & Exact evaluation of Mock Test
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 2 Batches - Morning & Evening
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Free Study Material /Handouts
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Weekly Test Predictions
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Weekly Mock Test
                      </p>
                    </ul>
                    <p className="text-md text-indigo-700 group-hover:text-white relative pl-3">
                      <span className="text-2xl font-semibold">02</span>
                    </p>
                  </div>
                </div>
                <div className=" w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full mb-4 px-2 p-10">
                  <div className="shadow-lg py-5 px-4  group hover:bg-indigo-800 border border-gray-200shadow rounded-lg text-left">
                    <h4 className="text-2xl text-indigo-700 group-hover:text-white font-semibold pb-8">
                      Spoken English
                    </h4>
                    <ul className="flex flex-col mb-6">
                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Speaking English course
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Basic, intermediate and Advanced
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 writing practice
                      </p>

                      <p className="text-gray-800 group-hover:text-white text-md font-semibold mb-2.5">
                        👉 Doubt-solving sessions
                      </p>
                    </ul>
                    <p className="text-md text-indigo-700 group-hover:text-white relative pl-3">
                      <span className="text-2xl font-semibold">03</span>
                    </p>
                  </div>
                </div>
                <div className=" w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full mb-4 px-2 p-10">
                  <div className="shadow-lg py-5 px-4  group hover:bg-indigo-800 border border-gray-200shadow rounded-lg text-left">
                    <h4 className="text-2xl text-indigo-700 group-hover:text-white font-semibold pb-8">
                      Grammar, Personality Development & Soft Skills
                    </h4>
                    <ul className="flex flex-col mb-6">
                      <p className="text-gray-800 text-md group-hover:text-white font-semibold mb-2.5">
                        👉 Special Grammar Sessions
                      </p>

                      <p className="text-gray-800 text-md group-hover:text-white font-semibold mb-2.5">
                        👉 Personality Development Training
                      </p>

                      <p className="text-gray-800 text-md group-hover:text-white font-semibold mb-2.5">
                        👉 interview preparations
                      </p>

                      <p className="text-gray-800 text-md group-hover:text-white font-semibold mb-2.5">
                        👉 Public speaking
                      </p>

                      <p className="text-gray-800 text-md group-hover:text-white font-semibold mb-2.5">
                        👉 Overall personality development
                      </p>

                      <p className="text-gray-800 text-md group-hover:text-white font-semibold mb-2.5">
                        👉 Soft Skills Training, Corporate and Educational
                        Training
                      </p>
                    </ul>
                    <p className="text-md text-indigo-700 group-hover:text-white relative pl-3">
                      <span className="text-2xl font-semibold">04</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: "",
              }}
            />
          </div>
        </div>
      </div>
    </section>

    <style>
      {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
    </style>
  </div>
);
export default Courses;
