import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import HomeServices from "@/components/HomeServices";
import HomeIndustries from "@/components/HomeIndustries";
import HomeWhyChoose from "@/components/HomeWhyChoose";
import HomeContact from "@/components/HomeContact";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <HomeServices />
      <HomeIndustries />
      <HomeWhyChoose />
      <HomeContact />
    </>
  );
}
