"use client";

import Home from "./Home";
import About from "./About";
import HomeServices from "@/components/HomeServices";
import HomeIndustries from "@/components/HomeIndustries";
import HomeWhyChoose from "@/components/HomeWhyChoose";
import HomePortfolio from "@/components/HomePortfolio";
import HomeContact from "@/components/HomeContact";

export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <HomeServices />
      <HomeIndustries />
      <HomeWhyChoose />
      <HomePortfolio />
      <HomeContact />
    </>
  );
}
