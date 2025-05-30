'"use client";';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Contact />
    </main>
  );
}
