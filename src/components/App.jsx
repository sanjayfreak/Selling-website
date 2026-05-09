import { globalStyles } from "./constants";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}