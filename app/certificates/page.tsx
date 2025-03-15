import CardSlider from "../components/card-slider";
import CertificationsSection from "../components/certificates/certifications-section";
import heroImage from "@/public/images/contact-bg.jpeg";

const testingProcessSlides = [
  {
    image: heroImage.src,
    alt: "Material testing in laboratory",
    title: "Material Testing",
  },
  {
    image: heroImage.src,
    alt: "Structural inspection of concrete pillars",
    title: "Structural Inspection",
  },
  {
    image: heroImage.src,
    alt: "Quality control technicians checking specifications",
    title: "Quality Control",
  },
  {
    image: heroImage.src,
    alt: "Load testing equipment for concrete pillars",
    title: "Load Testing",
  },
  {
    image: heroImage.src,
    alt: "Durability testing in environmental chamber",
    title: "Durability Testing",
  },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    image: heroImage.src,
  },
  {
    name: "CE Mark",
    image: heroImage.src,
  },
  {
    name: "Industry Excellence Awards",
    image: heroImage.src,
  },
  {
    name: "LEED Certification",
    image: heroImage.src,
  },
  {
    name: "US Green Building Council",
    image: heroImage.src,
  },
  {
    name: "Trusted Seller",
    image: heroImage.src,
  },
  {
    name: "100% Trusted",
    image: heroImage.src,
  },
  {
    name: "ASTM International",
    image: heroImage.src,
  },
  {
    name: "ACI Certification",
    image: heroImage.src,
  },
  {
    name: "BBA",
    image: heroImage.src,
  },
  {
    name: "IGBC Member",
    image: heroImage.src,
  },
  {
    name: "USGBC LEED",
    image: heroImage.src,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="pt-24 pb-32">
        <CertificationsSection certifications={certifications} />
        <CardSlider title="Our Products" slides={testingProcessSlides} />
      </div>
    </div>
  );
}
