import certificate1 from '@/public/images/home/cf-1.png';
import Image from 'next/image';

interface Certification {
  name: string;
  image: string;
}

interface CertificationsWithTextProps {
  title?: string;
  description?: string;
  certifications: Certification[];
  className?: string;
}

export default function CertificationsWithText({
  title = 'Certifications',
  description = 'We are committed to upholding the highest industry standards, ensuring that every concrete poles we produce meets rigorous quality, durability, and safety regulations. Our manufacturing process follows strict compliance measures, using advanced technology and premium materials to guarantee long-lasting strength and performance. With industry-recognized certifications, we demonstrate our dedication to excellence, reliability, and customer satisfaction. Whether for large-scale infrastructure projects or residential developments, our certified concrete solutions provide the foundation for safe and enduring construction.',
  certifications = [{ name: 'CPR', image: certificate1.src }],
  className,
}: CertificationsWithTextProps) {
  return (
    <section className={`w-full py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold" style={{ color: '#1B3B47' }}>
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Right Side - Certification Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto w-full max-w-md sm:max-w-none">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center aspect-square max-w-[300px] mx-auto w-full"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={cert.image || '/placeholder.svg'}
                    alt={cert.name}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
