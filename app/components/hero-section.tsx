"use client";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  description,
  backgroundImage = "",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center pt-28 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundColor: "var(--primary)",
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) -411.33%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
