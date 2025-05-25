import React from 'react';
import HeroSection from '../hero-section';

const ServicesHeader = () => {
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