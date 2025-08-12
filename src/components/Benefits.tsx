import { Button } from "@/components/ui/button";
import { DollarSign, Shield, Zap, MessageCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Economia no custo operacional",
      description: "Redução significativa nos gastos com energia e manutenção"
    },
    {
      icon: Shield,
      title: "Alta durabilidade e desempenho",
      description: "Construção robusta para suportar operações intensivas"
    },
    {
      icon: Zap,
      title: "Tecnologia de ponta em lítio e chumbo-ácido",
      description: "Soluções avançadas para cada tipo de operação"
    }
  ];

  return (
    <section className="py-20 bg-power-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-section text-power-black mb-6">
            Reduza custos, amplie a autonomia e mantenha sua operação sempre ativa
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-power-yellow rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-power-black" />
                </div>
                <h3 className="font-card text-power-black mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="bg-power-black py-12 px-8 rounded-2xl text-center">
          <div className="max-w-3xl mx-auto">
            <a href="https://wa.me/554199890345?text=Olá! Gostaria de falar sobre manutenção ou venda de baterias tracionárias." target="_blank">
            <Button variant="power-primary" size="lg" className="mb-6 shadow-xl">
              <MessageCircle className="w-5 h-5" />
              Solicite orçamento via WhatsApp
            </Button>
            </a>
            
            <p className="text-power-white text-lg font-medium">
              Qualidade e prazo de entrega que sua operação precisa é com a Power Trac
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;