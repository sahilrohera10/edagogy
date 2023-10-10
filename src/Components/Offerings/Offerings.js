import React from "react";
import img1 from "../../Assets/offerimg1.jpeg";
import img2 from "../../Assets/offerimg2.jpg";
import img3 from "../../Assets/offerimg3.jpg";
import "./Offerings.css";

const data = [
  {
    name: "Counselling",
    img: img1,
    text1: "Free Counselling sessions for IELTS (Academic/General) & PTE",
    text2: "Free candidate English assessment to assess the prior knowledge",
  },
  {
    name: "Regular Classroom",
    img: img2,
    text1: "25-30 hours of personal training with 5 Mock Tests",
    text2: "Access to computer Lab",
  },
  {
    name: "PTE (Pearson Test Of English)",
    img: img3,
    text1: "Boost your PTE scores with our comprehensive online course. ",
    text2:
      " Expert guidance, practice tests, and effective strategies for success!",
  },
  {
    name: "Spoken English",
    img: img3,
    text1:
      "Master Spoken English with our comprehensive online course, designed to improve fluency, pronunciation, and communication skills. ",
    text2: " Suitable for all Age Groups, especially school going kids.",
  },
];

const Offerings = () => {
  return (
    <div className=" 2xl:container 2xl:mx-auto mb-8">
      <div className=" text-center lg:py-6 md:py-6 py-6">
        <p
          style={{ color: "#0A970D" }}
          className=" w-10/12 mx-auto md:w-full  font-bold lg:text-3xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center"
        >
          ~ OUR OFFERINGS
        </p>
      </div>
      <div className=" py-3 lg:px-20 md:px-6 px-4">
        <div className="  lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          <div className="relative md:flex justify-evenly flex-wrap ">
            {data.map((d) => (
              <a className="bg-slate-100 relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 h-60 w-2/5  shadow-xl	offercard">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div className="bg-slate-50 sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {d.name}
                    </h3>
                  </div>

                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt="logo"
                      src={d.img}
                      className="h-24 w-28 rounded-lg object-contain shadow-sm -mt-10"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="max-w-[40ch] text-md text-gray-900">
                    {d.text1} <br />
                    <br />
                    {d.text2}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
