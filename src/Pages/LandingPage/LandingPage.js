import React from "react";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Offerings from "../../Components/Offerings/Offerings";
import Contact from "../../Components/Contact/Contact";
import Courses from "../../Components/Courses/Courses";
import ClassTour from "../../Components/ClassTour/ClassTour";
import Locate from "../../Components/Locate/Locate";
import Footer from "../../Components/Footer/Footer";
import Success from "../../Components/Success/Success";
import Blogs from "../../Components/Blogs/Blogs";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <About />
      <Offerings />
      <Contact />
      <Courses />
      <Success />
      <Blogs />
      <ClassTour />

      <Locate />
      <Footer />
    </div>
  );
}
