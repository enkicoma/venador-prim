import Image from "next/image"
import certificate1 from "@/public/images/home/cf-1.png";
import certificate2 from "@/public/images/home/cf-2.png";
import certificate3 from "@/public/images/home/cf-3.png";
import certificate4 from "@/public/images/home/cf-4.png";
import certificate5 from "@/public/images/home/cf-5.png";
import certificate6 from "@/public/images/home/cf-6.png";

interface Certification {
  name: string
  image: string
}

interface CertificationsWithTextProps {
  title?: string
  description?: string
  certifications: Certification[]
  className?: string
}

export default function CertificationsWithText({
  title = "Certifications",
  description = "We are committed to upholding the highest industry standards, ensuring that every concrete pillar we produce meets rigorous quality, durability, and safety regulations. Our manufacturing process follows strict compliance measures, using advanced technology and premium materials to guarantee long-lasting strength and performance. With industry-recognized certifications, we demonstrate our dedication to excellence, reliability, and customer satisfaction. Whether for large-scale infrastructure projects or residential developments, our certified concrete solutions provide the foundation for safe and enduring construction.",
  certifications = [
    {name: "ISO 9001:2015", image: certificate1.src},
    {name: "ISO 14001:2015", image: certificate2.src},
    {name: "ISO 45001:2018", image: certificate3.src},
    {name: "ISO 14001:2015", image: certificate4.src},
    {name: "ISO 14001:2015", image: certificate5.src},
    {name: "ISO 14001:2015", image: certificate6.src},
  ],
  className,
}: CertificationsWithTextProps) {
  return (
    <section className={`w-full py-16 bg-gray-50 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold" style={{ color: "#1B3B47" }}>
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          

          {/* Right Side - Certification Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center aspect-square"
              >
                <div className="relative h-full aspect-square">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

