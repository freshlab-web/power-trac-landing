import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Models = () => {
  const models = [
    {
      name: "Bateria 24V 354AH",
      image: "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/18014bfb-7e0e-427d-a30d-a12022025782.png",
      specs: "Alta performance para operações intensivas",
      link: "https://wa.me/554199890345?text=Gostaria de saber sobre a Bateria 24V 354AH"
    },
    {
      name: "Bateria 36V 258AH",
      image: "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/52a9578c-b7bd-487d-938b-c6d31349940f.png",
      specs: "Tecnologia avançada em lítio",
      link: "https://wa.me/554199890345?text=Gostaria de saber sobre a Bateria 36V 258AH"
    },
    {
      name: "Bateria 48V 608Ah",
      image: "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/37627045-808d-4d23-b02b-bdf47b96f9cd.png",
      specs: "Durabilidade comprovada",
      link: "https://wa.me/554199890345?text=Gostaria de saber sobre a Bateria 48V 608Ah"
    }
  ];

  return (
    <section className="py-20 bg-power-white" id="modelosprocurados">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-section text-power-black mb-6">
            Modelos Mais Procurados
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
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
                  
                    <a className="orcamento-modelos" href={model.link} target="_blank">
                  <Button variant="power-primary" className="w-full">
                    Solicitar orçamento
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;