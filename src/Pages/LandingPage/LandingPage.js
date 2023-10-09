import React from "react";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Offerings from "../../Components/Offerings/Offerings";
import Contact from "../../Components/Contact/Contact";
import Courses from "../../Components/Courses/Courses";
import ClassTour from "../../Components/ClassTour/ClassTour";
import Locate from "../../Components/Locate/Locate";
import Footer from "../../Components/Footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <About />
      <Offerings />
      <Contact />
      <Courses />
      <ClassTour />
      <Locate />
      <Footer />
    </div>
  );
}
