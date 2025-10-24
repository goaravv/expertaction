import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Placeholder certificates - replace with actual certificate images
const certificates = [
  {
    id: 1,
    title: "NSE Certification",
    description: "National Stock Exchange Certified Training Program",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "SEBI Registered",
    description: "Securities and Exchange Board of India Recognition",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Professional Trading Excellence",
    description: "Advanced Price Action Trading Certification",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
  },
];

const Certificates = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Our Certifications
          </h2>
          <p className="text-lg text-foreground/80">
            Recognized and certified by leading financial institutions
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {certificates.map((cert) => (
              <CarouselItem key={cert.id} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                <Card className="bg-card border-accent/20 overflow-hidden hover:border-accent/40 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-accent mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Certificates;
