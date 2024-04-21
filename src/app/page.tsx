import { Home } from "@/components/Home";
import About from "@/components/About";
import Skill from "@/components/Skill";
import LatestProject from "@/components/LatestProject";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Home />
      <About />
      <Skill />
      <LatestProject/>
      <Footer />
    </main>
  );
}
