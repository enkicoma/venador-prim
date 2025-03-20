import Image from "next/image";
import { Check } from "lucide-react";
import bleImage1 from "@/public/images/projects/ble-1.png";
import bleImage2 from "@/public/images/projects/ble-2.png";
import bleImage3 from "@/public/images/projects/ble-3.png";
import bleImage4 from "@/public/images/projects/ble-4.png";
import bleImage5 from "@/public/images/projects/ble-5.png";
import bleImage6 from "@/public/images/projects/ble-6.png";


interface ProjectFeature {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const projects: ProjectFeature[] = [
  {
    title: "Skyline Tower – High-Rise Reinforcement",
    description:
      "A 50-story commercial tower strengthened with our reinforced concrete pillars, ensuring maximum load-bearing capacity and long-term stability.",
    image: bleImage1.src,
    features: [
      "Engineered for earthquake resistance.",
      "High-strength concrete for skyscrapers.",
      "Ensuring long-term structural integrity.",
    ],
  },
  {
    title: "Metro Bridge – Infrastructure Excellence",
    description:
      "A large-scale transportation project utilizing our precast concrete pillars for enhanced durability and seamless construction efficiency.",
    image: bleImage2.src,
    features: [
      "Quick installation with precast technology.",
      "Designed for heavy traffic load.",
      "Resistant to extreme weather conditions.",
    ],
  },
  {
    title: "Modern Residential Complex – Solid Foundations",
    description:
      "A contemporary housing development built on our custom concrete pillars, designed to provide structural integrity and safety.",
    image: bleImage3.src,
    features: [
      "Sustainable and durable materials.",
      "Supports multi-story residential structures.",
      "Designed for seismic safety.",
    ],
  },
  {
    title: "Luxury Hotel – Architectural Strength",
    description:
      "A premium hotel project where our high-quality concrete pillars contribute to both structural reliability and modern aesthetics.",
    image: bleImage4.src,
    features: [
      "Custom-designed for architectural appeal.",
      "Provides long-lasting stability.",
      "Enhances luxury and modern design.",
    ],
  },
  {
    title: "Industrial Warehouse – Heavy-Duty Support",
    description:
      "A high-capacity warehouse supported by our industrial-grade concrete pillars, ensuring long-lasting performance under heavy loads.",
    image: bleImage5.src,
    features: [
      "Withstands extreme weight and stress.",
      "Fire-resistant and durable materials.",
      "Optimized for large-scale storage.",
    ],
  },
  {
    title: "Sustainable Office Park – Eco-Friendly Innovation",
    description:
      "An environmentally conscious construction using our eco-friendly concrete solutions, reducing carbon footprint without compromising strength.",
    image: bleImage6.src,
    features: [
      "Uses low-carbon concrete mix.",
      "Energy-efficient and sustainable.",
      "Designed for long-term green certification.",
    ],
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#1B3B47" }}
        >
          Built to Last, Engineered for Excellence
        </h2>

        <div className="space-y-[20px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-5 gap-8 items-center p-6 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
            >
              <div className="relative h-[350px] rounded-lg overflow-hidden md:col-span-2">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 md:col-span-3">
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: "#1B3B47" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <Check
                        className="h-5 w-5 mt-1 flex-shrink-0"
                        style={{ color: "#1B3B47" }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
