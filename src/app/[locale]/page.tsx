'"use client";';
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <div className="divider"></div>
      <Projects />
    </main>
  );
}
