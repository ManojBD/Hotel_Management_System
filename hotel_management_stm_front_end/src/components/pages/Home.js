import React from "react";
import "../../App.css";
import Navbar from "../../components/Navbar";
import { AspectRatio } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <AspectRatio maxW="560px">
        <iframe
          src="https://www.youtube.com/embed/6IQCuTEKlCo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </AspectRatio>
      <AspectRatio maxW="560px">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1hPlG1DDduEjwpvBuGn7dGdO0A41u9IAx&ehbc=2E312F"
          width="640"
          height="480"
          alt="demo"
        ></iframe>
      </AspectRatio>
      <Footer />
    </>
  );
}

export default Home;
