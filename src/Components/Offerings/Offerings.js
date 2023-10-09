import React from "react";
import img1 from "../../Assets/offerimg1.jpeg";

const data = [
  {
    name: "Counselling",
    first: "Free Counselling sessions for IELTS (Academic/General) & PTE",
    second: "Free candidate English assessment to assess the prior knowledge",
    img: img1,
    color: "#383086",
  },
];

const Offerings = () => {
  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
        <p
          style={{ color: "#0A970D" }}
          className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-lg text-lg lg:leading-9 md:leading-7 leading-9 text-center text-gray-800"
        >
          OUR OFFERINGS
        </p>
      </div>
      <div
        style={{ backgroundColor: "#57B23C" }}
        className=" py-6 lg:px-20 md:px-6 px-4"
      >
        <div
          style={{ display: "flex" }}
          className="  lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10"
        >
          {data.map((d) => (
            <div>
              <a
                style={{ backgroundColor: "white" }}
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
              >
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {d.name}
                    </h3>
                  </div>

                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt="Paul Clapton"
                      src={d.img}
                      className="h-20 w-20 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="max-w-[40ch] text-sm text-gray-500">
                    {d.first}
                    <br />
                    <br />
                    {d.second}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className=" flex justify-center items-center">
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
