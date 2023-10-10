import React from "react";
function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert ">
        <div
          style={{ background: "#3C3187" }}
          className=" mx-auto container pt-20 lg:pt-4 flex flex-col items-center justify-center"
        >
          <div className="text-white flex flex-col md:items-center f-f-l pt-3 font-semibold ">
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 text-lg ">
                  Home
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 text-lg">
                  Courses
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 text-lg">
                  Blogs
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 text-lg">
                  Contact
                </li>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l">
              <p> © 2023 Edagogy. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
