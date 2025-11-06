import React from "react";
import Features from "../../Component/Features/Features";
import HowItWorks from "../../Component/HowItWorks/HowItWorks";
import Testimonials from "../../Component/Testimonials/Testimonials";
import BookDemo from "../../Component/BookDemo/BookDemo";
import FreeDemo from "../../Component/FreeDemo/FreeDemo";
import Footer from "../../Component/Footer/Footer";
import HeroSection from "../../Component/HeroSection/HeroSection";
import DolfinAIHome from "../../Component/DolfinFeatures/DolfinFeatures";

function Home() {
  return (
    <>
      <HeroSection home="/" id="contact" />
      <Features id="features" />
      <HowItWorks id="howitworks" />
      <DolfinAIHome id="dolpfin" />
      <Testimonials id="testimonials" />
      <BookDemo id="contact" />
      <FreeDemo />
      <Footer />
    </>
  );
}

export default Home;
