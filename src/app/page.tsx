import Header from "./Components/Header/page";
import Hero from "./Components/Hero/page";
import About from "./Components/About/page";
import Mission from "./Components/Mission/page";
import OurProjects from "./Components/OurProjects/pages";
import Contact from "./Components/Contact/page";
import Footer from "./Components/Footer/page";
import FooterEnd from "./Components/FooterEnd/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Mission />
      <OurProjects />
      <Contact />
      <Footer />
      <FooterEnd />
    </div>
  );
}
