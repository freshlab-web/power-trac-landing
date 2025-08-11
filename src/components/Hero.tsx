import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Eye } from "lucide-react";
import heroImage from "@/assets/hero-forklift.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-power-black overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img
          src="/lovable-uploads/32f85995-6e29-48d3-b7e2-c3353ab52ec0.png"
          alt="Power Trac Logo"
          className="h-20 w-auto"
        />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Empilhadeira elétrica em operação"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-power-black/90 via-power-black/70 to-power-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-power-white space-y-8">
            <h1 className="font-hero text-power-white leading-tight">
              Venda e manutenção de{" "}
              <span className="text-power-yellow">baterias tracionárias</span>{" "}
              para empilhadeira elétrica
            </h1>
            
            <p className="text-xl text-power-white/90 leading-relaxed">
              Leve a marca da força para sua operação
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="power-hero" className="group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Atendimento via WhatsApp
              </Button>
              
              <Button variant="power-outline" size="lg">
                <Eye className="w-5 h-5" />
                Veja os modelos disponíveis
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:ml-auto">
            <div className="bg-power-white p-8 rounded-xl shadow-2xl max-w-md">
              <h3 className="font-section text-power-black mb-6 text-center">
                Receba nosso contato
              </h3>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Nome completo"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="Telefone"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email"
                    placeholder="E-mail"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="CNPJ (opcional)"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                  />
                </div>
                
                <Button variant="power-primary" className="w-full" size="lg">
                  Receber contato
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;