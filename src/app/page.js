import Experience from "@/sections/Experience";
import Header from "@/components/Header";
import About from "@/sections/About";
import Flavours from "@/sections/Flavours";
import Hero from "@/sections/Hero";
import Testimonials from "@/sections/Testimonials";
import Footer from "@/components/Footer";

function page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Flavours />
      <Experience />
      <Testimonials/>
      <Footer/>
    </main>
  );
}

export default page;
