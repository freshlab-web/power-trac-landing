import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Models = () => {
  const models = [
    {
      name: "Bateria Tracionária 24V",
      image: "/lovable-uploads/18014bfb-7e0e-427d-a30d-a12022025782.png",
      specs: "Alta performance para operações intensivas"
    },
    {
      name: "Bateria Lítio 48V",
      image: "/lovable-uploads/52a9578c-b7bd-487d-938b-c6d31349940f.png",
      specs: "Tecnologia avançada em lítio"
    },
    {
      name: "Bateria Chumbo-Ácido 36V",
      image: "/lovable-uploads/37627045-808d-4d23-b02b-bdf47b96f9cd.png",
      specs: "Durabilidade comprovada"
    }
  ];

  return (
    <section className="py-20 bg-power-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-section text-power-black mb-6">
            Modelos Mais Procurados
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {models.map((model, index) => (
              <Card key={index} className="flex-none w-80 group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-power-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-card text-power-black mb-3">{model.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {model.specs}
                    </p>
                    
                    <Button variant="power-primary" className="w-full">
                      Solicitar orçamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;