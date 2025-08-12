import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const logoJMalucelli = "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/a847ccaa-4924-4dbc-9ec4-89b55b8c45cf.png";
const logoBrasilSat = "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/48c48a5d-100e-457c-904f-ae572aa3ed76.png";
const logoCoteminas = "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/f4113aab-ab20-4918-bcea-8c85b49a785b.png";
const logoCSI = "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/c19308e3-1a8d-4b62-824f-c4250d859b02.png";
const logoFaurecia = "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/6bc4ff7b-0312-4550-807e-1a99ec58f1ae.png";
const logoFoxlux = "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/lovable-uploads/ba2905ae-cc70-4171-b5d7-268e609e48c2.png";

const Authority = () => {
  const companyLogos = [
    { name: "JMalucelli", logo: logoJMalucelli },
    { name: "BrasilSat", logo: logoBrasilSat },
    { name: "Coteminas", logo: logoCoteminas },
    { name: "CSI", logo: logoCSI },
    { name: "Faurecia", logo: logoFaurecia },
    { name: "Foxlux", logo: logoFoxlux },
  ];

  return (
    <section className="py-20 bg-power-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-power-black leading-relaxed font-medium mb-12">
            Mais de <span className="text-power-yellow bg-power-black px-2 py-0.5 rounded font-bold">20 anos de mercado</span>, 
            <span className="text-power-yellow bg-power-black px-2 py-0.5 rounded font-bold"> 3 fábricas no Brasil</span> e uma 
            linha completa de baterias tracionárias de 24 V ou mais, com 
            <span className="text-power-yellow bg-power-black px-2 py-0.5 rounded font-bold"> tecnologia inteligente</span> em 
            chumbo-ácido e lítio.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {companyLogos.map((company, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm p-4">
                      <img
                        src={company.logo}
                        alt={`Logo ${company.name}`}
                        className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;