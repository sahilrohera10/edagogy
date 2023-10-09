import React from "react";

const About = () => {
  return (
    <div className=" bg-gray-100 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p
        style={{ color: "#0A970D" }}
        className="font-semibold text-lg leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2"
      >
        WHO WE ARE
      </p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            GET EMPOWERED WITH US & GROW
          </h2>
          <p className="font-normal text-base leading-6 text-gray-800 mt-6">
            Commenced in 2020 as Green Tickit in Zirakpur, we relaunched
            ourselfs as Edagogy in 2021. Post delivering many successful #IELTS
            #PTE #Spoken-English results we expanded ourselvs into a much more
            refined version under Edagogy. We established our institue in
            Zirakpur in-order to cater students from all over Tricity.
            <br />
            <br />
            We are technology and quality driven institute with not only
            experienced faculty but with a strong vision to bring in a positive
            change in the lives of those who are seeking for one. Our USP is
            small batches for our courses, to deliver quality.
            <br />
            We offer a range of courses starting from{" "}
            <b>
              IELTS, PTE, SPOKEN ENGLISH, WRITTEN ENGLISH, SOFTSKILLS TRAINING,
              CUSTOMIZED TRAININGS AND COURSES DEPENDING UPON THE
              CLIENT'S/STUDENT'S
            </b>{" "}
            needs.
            <br />
            <br />
            We also provide various on-campus and off-campus workforce training
            programs for learning and development of employees in diverse
            industries. We provide training to enhance knowledge and skills of
            employees to stay competitive in the ever-challenging global market.
            We aid organizations, institutions, and professionals to optimise
            their knowledge, skills and competence.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
