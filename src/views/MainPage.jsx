"use client";

import Home from "./Home";
import About from "./About";
import HomeServices from "@/components/HomeServices";
import HomeIndustries from "@/components/HomeIndustries";
import HomeWhyChoose from "@/components/HomeWhyChoose";
import HomeContact from "@/components/HomeContact";

export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <HomeServices />
      <HomeIndustries />
      <HomeWhyChoose />
      <HomeContact />
    </>
  );
}
