import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategorialCarousal from "./CategorialCarousal";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategorialCarousal />
      <LatestJobs />
      <Footer />
    </div>
  );
}

export default Home;
