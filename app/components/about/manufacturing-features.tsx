import Image from "next/image"

interface Feature {
  title: string
  description: string
  image: string
}

interface ManufacturingFeaturesProps {
  title: string
  features: Feature[]
}

export default function ManufacturingFeatures({
  title = "We Are a Manufacturing Company",
  features,
}: ManufacturingFeaturesProps) {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#1B3B47" }}>
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-4 rounded-[10px]" style={{boxShadow: "0px 0px 10px 0px #0000001A"}}>
              {/* Image Container */}
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} width={300} height={300} className="object-cover w-full h-full" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold" style={{ color: "#1B3B47" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

