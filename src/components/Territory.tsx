import { Card } from "@/components/ui/card";

const Territory = () => {
  return (
    <section className="py-20 bg-power-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-section text-power-black">
              Filiais e atuação em<br />
              <span className="text-power-yellow">TERRITÓRIO NACIONAL</span>
            </h2>
            
            <p className="text-lg text-power-black leading-relaxed">
              O grupo Power Trac baterias conta com 03 fábricas espalhadas em pontos estratégicos do Brasil e uma Holding. Além de inúmeros clientes contamos com a força e participação de mais de 30 distribuidores/representantes em todo território nacional.
            </p>
          </div>

          {/* Map */}
          <div className="flex justify-center">
            <Card className="p-6 bg-white shadow-2xl border-0">
              <img 
                src="/lovable-uploads/42e3e567-e3bc-4f10-8dca-50d37cba5f89.png"
                alt="Mapa do Brasil mostrando a distribuição das filiais Power Trac"
                className="w-full max-w-md h-auto"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Territory;