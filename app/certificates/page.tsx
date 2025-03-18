import CardSlider from "../components/card-slider";
import CertificationsSection from "../components/certificates/certifications-section";
import tpImage1 from "@/public/images/certificates/tp-1.png";
import tpImage2 from "@/public/images/certificates/tp-2.png";
import tpImage3 from "@/public/images/certificates/tp-3.png";
import tpImage4 from "@/public/images/certificates/tp-4.png";
import tpImage5 from "@/public/images/certificates/tp-5.png";

import ocImage1 from "@/public/images/certificates/oc-1.png";
import ocImage2 from "@/public/images/certificates/oc-2.png";
import ocImage3 from "@/public/images/certificates/oc-3.png";
import ocImage4 from "@/public/images/certificates/oc-4.png";
import ocImage5 from "@/public/images/certificates/oc-5.png";
import ocImage6 from "@/public/images/certificates/oc-6.png";
import ocImage7 from "@/public/images/certificates/oc-7.png";
import ocImage8 from "@/public/images/certificates/oc-8.png";
import ocImage9 from "@/public/images/certificates/oc-9.png";
import ocImage10 from "@/public/images/certificates/oc-10.png";
import ocImage11 from "@/public/images/certificates/oc-11.png";
import ocImage12 from "@/public/images/certificates/oc-12.png";


const testingProcessSlides = [
  {
    image: tpImage1.src,
    alt: "Material testing in laboratory",
  },
  {
    image: tpImage2.src,
    alt: "Structural inspection of concrete pillars",
  },
  {
    image: tpImage3.src,
    alt: "Quality control technicians checking specifications",
  },
  {
    image: tpImage4.src,
    alt: "Load testing equipment for concrete pillars",
  },
  {
    image: tpImage5.src,
    alt: "Durability testing in environmental chamber",
  },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    image: ocImage1.src,
  },
  {
    name: "CE Mark",
    image: ocImage2.src,
  },
  {
    name: "Industry Excellence Awards",
    image: ocImage3.src,
  },
  {
    name: "LEED Certification",
    image: ocImage4.src,
  },
  {
    name: "US Green Building Council",
    image: ocImage5.src,
  },
  {
    name: "Trusted Seller",
    image: ocImage6.src,
  },
  {
    name: "100% Trusted",
    image: ocImage7.src,
  },
  {
    name: "ASTM International",
    image: ocImage8.src,
  },
  {
    name: "ACI Certification",
    image: ocImage9.src,
  },
  {
    name: "BBA",
    image: ocImage10.src,
  },
  {
    name: "IGBC Member",
    image: ocImage11.src,
  },
  {
    name: "USGBC LEED",
    image: ocImage12.src,
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
