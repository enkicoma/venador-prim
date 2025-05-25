'use client'

import React from 'react';
import HeroSection from '../hero-section';
import heroImage from "@/public/images/services/services-hero-bg.jpg";
import { useTranslation } from 'react-i18next';

const ServicesHeader = () => {
    const { t } = useTranslation();
    return (
        <>
          <HeroSection
        title={t("services.hero.title")}
        description={t("services.hero.description")}
        backgroundImage={heroImage.src}
      />   
        </>
    );
};

export default ServicesHeader;