'use client'

import chooseImage from "@/public/images/products/choose-product.jpg";
import heroImage from "@/public/images/products/product-hero-bg.jpg";
import { useTranslation } from "react-i18next";
import FeatureSection from "../feature-section";
import HeroSection from "../hero-section";
import ProductRange from "./product-range";

const ProductMain = () => {
  const { t } = useTranslation();

  const whyChooseUsFeatures = {
    title: t("products.whyChoose.title"),
    description: t("products.whyChoose.description"),
    features: [
      {
        title: t("products.whyChoose.features.durability.title"),
        description: t("products.whyChoose.features.durability.description"),
      },
      {
        title: t("products.whyChoose.features.engineering.title"),
        description: t("products.whyChoose.features.engineering.description"),
      },
      {
        title: t("products.whyChoose.features.delivery.title"),
        description: t("products.whyChoose.features.delivery.description"),
      },
    ],
    image: chooseImage.src,
  };

  return (
    <>
      <HeroSection
        title={t("products.hero.title")}
        description={t("products.hero.description")}
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ProductRange />
        <FeatureSection
          buttonLink="/contact"
          buttonText={t("products.range.buttonText")}
          {...whyChooseUsFeatures}
        />
      </div>
    </>
  );
};

export default ProductMain;
