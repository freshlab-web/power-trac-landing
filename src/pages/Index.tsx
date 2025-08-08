import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import Authority from "@/components/Authority";
import Models from "@/components/Models";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Segments />
      <Authority />
      <Models />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
