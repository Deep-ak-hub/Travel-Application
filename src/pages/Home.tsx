import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import AboutSection from "../components/AboutSection";
import Categories from "../components/Categories";
import LuxuryTrips from "../components/LuxuryTrips";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/NewsLetter";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <AboutSection />
      <Categories />
      <LuxuryTrips />
      <FAQ />
      <BlogSection />
      <Newsletter />
      {/* <Footer /> */}
    </>
  );
}