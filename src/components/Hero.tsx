import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast"; // ✅ usa o seu hook correto
import heroImage from "@/assets/hero-forklift.jpg";

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast(); // inicializa o toast

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.target as HTMLFormElement;
    const formDataToSend = new FormData(formElement);

    try {
      const response = await fetch(
        "https://webdesign.freshlab.com.br/lp-mail/lp-mail.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar formulário");

      toast({
        title: "✅ Enviado com sucesso",
        description: "Em breve entraremos em contato.",
      });

      formElement.reset();
    } catch (error) {
      toast({
        title: "❌ Erro",
        description: "Não foi possível enviar, tente novamente.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <span className="text-power-yellow bg-power-black px-2 py-0.5 rounded">
                baterias tracionárias
              </span>{" "}
              para empilhadeira elétrica
            </h1>

            <p className="text-xl text-power-white/90 leading-relaxed">
              Leve a marca da força para sua operação
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/554199890345?text=Olá! Gostaria de falar sobre manutenção ou venda de baterias tracionárias." target="_blank">
              <Button variant="power-hero" className="group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Atendimento via WhatsApp
              </Button>
              </a>
              <a href="https://www.powertrac.com.br/baterias-tracionarias/" target="_blank">
              <Button variant="power-outline" size="lg">
                
                <Eye className="w-5 h-5" />
                Veja os modelos disponíveis
              </Button>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:ml-auto">
            <div className="bg-power-white p-8 rounded-xl shadow-2xl max-w-md">
              <h3 className="font-section text-power-black mb-6 text-center">
                Receba nosso contato
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Campos ocultos */}
                <input
                  type="hidden"
                  name="destinatario"
                  value="almir@freshlab.com.br"
                />
                <input
                  type="hidden"
                  name="assunto"
                  value="LP baterias tracionarias"
                />

                <div>
                  <Input
                    name="nome"
                    placeholder="Nome completo"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="telefone"
                    placeholder="Telefone"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="cnpj"
                    placeholder="CNPJ (opcional)"
                    className="border-2 border-gray-200 focus:border-power-yellow"
                  />
                </div>

                <Button
                  variant="power-primary"
                  className="w-full"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Receber contato"}
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
