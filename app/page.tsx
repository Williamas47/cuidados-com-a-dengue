import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Transmissao from "@/components/Transmissao";
import Prevencao from "@/components/Prevencao";
import Quiz from "@/components/Quiz";
import SobreOTrabalho from "@/components/SobreOTrabalho";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Transmissao />
        <Prevencao />
        <Quiz />
        <SobreOTrabalho />
      </main>
      <Footer />
    </>
  );
}
