import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import CategoryCarousel from "../components/CategoryCarousel";
import About from "./About";
import ChooseUs from "../components/ChooseUs";
import GetCertificate from "../components/GetCertificate";
import FAQs from "../components/FAQs/FAQs";
import CourseSection from "./Course/CourseSection";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  return (
    <div>
      <Hero />
      <CategoryCarousel />
      <CourseSection selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <About />
      <ChooseUs />
      <FAQs />
      <GetCertificate />
    </div>
  );
};

export default Home;
