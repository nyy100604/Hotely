import About from "@/components/About";
import Featured from "@/components/Featured";
import Find from "@/components/Find";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recommendation from "@/components/Recommendation";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recommendation />
      <Find />
      <Testimonial />
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
