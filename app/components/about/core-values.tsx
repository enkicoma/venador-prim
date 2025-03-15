import { Shield, Settings2, Handshake } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: "Quality & Durability",
      description:
        "We use top-grade materials and advanced techniques to ensure our concrete pillars stand the test of time.",
    },
    {
      icon: Settings2,
      title: "Innovation & Precision",
      description:
        "We embrace modern engineering solutions to deliver precise, high-performance structures.",
    },
    {
      icon: Handshake,
      title: "Customer Commitment",
      description:
        "Your satisfaction is our priority—we provide reliable service and tailored solutions for every project.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1a3b4b] sm:text-4xl md:text-5xl">
          Our Core Values
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-xl bg-white p-6 text-center transition-all duration-300 ease-in-out hover:bg-[#1a3b4b]"
             style={{boxShadow: "0px 0px 10px 0px #0000001A"             }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a3b4b] transition-colors duration-300 ease-in-out group-hover:bg-white">
                <value.icon className="h-8 w-8 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1a3b4b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1a3b4b] transition-colors duration-300 ease-in-out group-hover:text-white">
                {value.title}
              </h3>
              <p className="mt-4 text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-white">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
