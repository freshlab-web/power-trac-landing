import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const offices = [
    {
      city: "Matriz Curitiba",
      address: "Rua Antonio Schiebel, 124 – 184 – Boqueirão – Curitiba/PR",
      phone: "+55 (41) 3082-3935",
      email: "powertrac@powertrac.com.br"
    },
    {
      city: "Filial Manaus",
      address: "Rua Apurinã, 301 – Centro – Manaus/AM",
      phone: "+55 (92) 3085-2137",
      email: "powertrac-am@powertrac.com.br"
    },
    {
      city: "Filial Florianópolis",
      address: "Avenida Prefeito Osmar Cunha, 416 – Centro – Florianópolis/SC",
      phone: "+55 (41) 3082-3935",
      email: "powertrac-sc@powertrac.com.br"
    }
  ];

  return (
    <footer className="bg-power-black text-power-white py-16">
      {/* Yellow top border */}
      <div className="h-1 bg-power-yellow"></div>
      
      <div className="container mx-auto px-4 pt-16">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="/lovable-uploads/32f85995-6e29-48d3-b7e2-c3353ab52ec0.png"
            alt="Power Trac Logo"
            className="h-16 w-auto"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {offices.map((office, index) => (
            <div key={index} className="space-y-6">
              <h3 className="font-card text-power-yellow mb-6">{office.city}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-power-yellow mt-1 flex-shrink-0" />
                  <p className="text-power-white/90 leading-relaxed">{office.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-power-yellow flex-shrink-0" />
                  <a href={`tel:${office.phone}`} className="text-power-white/90 hover:text-power-yellow transition-colors">
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-power-yellow flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-power-white/90 hover:text-power-yellow transition-colors">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-power-white/20 pt-8 text-center">
          <p className="text-power-white/70 mb-2">
            ©2024 Power Trac. Todos os direitos reservados.
          </p>
          <p className="text-power-white/70">
            Desenvolvido por{" "}
            <a 
              href="#" 
              className="text-power-yellow hover:text-power-yellow/80 transition-colors font-medium"
            >
              Fresh Lab Agência de Marketing Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;