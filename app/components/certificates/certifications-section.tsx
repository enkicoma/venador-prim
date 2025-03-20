import Image from "next/image"

interface Certification {
  name: string
  image: string
}

interface CertificationsSectionProps {
  title?: string
  description?: string
  certifications: Certification[]
}

export default function CertificationsSection({
  title = "Our Certifications",
  description = "At Venador Prime, we adhere to the highest industry standards, ensuring our concrete pillars meet strict quality, durability, and safety regulations. Our certifications reflect our commitment to excellence, reliability, and superior craftsmanship in construction.",
  certifications = [],
}: CertificationsSectionProps) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#1B3B47" }}>
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-[10px] p-2 md:p-4 flex items-center justify-center bg-white hover:shadow-md transition-shadow aspect-square h-[160px] md:h-[226px]"
             style={{boxShadow: "0px 0px 10.35px 0px #0000001A"}}>
              <div className="relative h-full w-full">
                <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-cover object-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

