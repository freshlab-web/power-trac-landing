import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import industryImage from "@/assets/industry-icon.jpg";
import distributionImage from "@/assets/distribution-icon.jpg";
import cargoImage from "@/assets/cargo-icon.jpg";

const Segments = () => {
  const segments = [
    {
      title: "Indústrias",
      image: industryImage,
      description: "Soluções robustas para ambientes industriais de alta demanda"
    },
    {
      title: "Centros de Distribuição",
      image: distributionImage,
      description: "Eficiência operacional para logística e armazenagem"
    },
    {
      title: "Movimentação de cargas",
      image: cargoImage,
      description: "Força e durabilidade para operações pesadas"
    }
  ];

  return (
    <section className="py-20 bg-power-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-section text-power-black mb-6">
            A marca da força está presente nos mais diversos cenários
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {segments.map((segment, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-power-black/20 group-hover:bg-power-black/30 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-card text-power-black mb-3">{segment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="power-primary" size="lg" className="shadow-xl">
            Receba seu orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Segments;