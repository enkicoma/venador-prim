import LogoSlider from "../logo-slider";
import certification1 from "@/public/images/home/ct-1.png";
import certification2 from "@/public/images/home/ct-2.png";
import certification3 from "@/public/images/home/ct-3.png";


export default function ClientsPartnersSection() {
  // Sample logos - in a real project, you would import these from your assets
  const logos = [
    {
      src: certification1.src,
      alt: "Client Logo 1",
    },
    {
      src: certification2.src,
      alt: "Client Logo 2",
    },
    {
      src: certification3.src,
      alt: "Client Logo 3",
    },
    {
      src: certification1.src,
      alt: "Client Logo 5",
    },
    {
      src: certification2.src,
      alt: "Client Logo 6",
    },
    {
      src: certification1.src,
      alt: "Client Logo 7",
    },
    {
      src: certification2.src,
      alt: "Client Logo 8",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1a3b4b] sm:text-4xl md:text-5xl">
          Our Clients and Partners
        </h2>
      </div>
      <div className="">
        <div className="mt-12 space-y-8">
          <LogoSlider logos={logos} direction="ltr" speed={40} />
          <LogoSlider logos={logos} direction="rtl" speed={30} />
        </div>
      </div>
    </section>
  );
}
