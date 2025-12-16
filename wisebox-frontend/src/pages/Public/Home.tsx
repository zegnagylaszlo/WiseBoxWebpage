import React from 'react';
import { Hero } from '../../components/Public/Hero';
import { BelieveInROI } from '../../components/Public/BelieveInROI';
import { WaveDivider } from '../../components/Public/WaveDivider';
import { GuaranteedROI } from '../../components/Public/GuaranteedROI';
import { Vision } from '../../components/Public/Vision';
import { Features } from '../../components/Public/Features';
import { ServiceCards } from '../../components/Public/ServiceCards';
import { FeaturesGrid } from '../../components/Public/FeaturesGrid';
import { Pricing } from '../../components/Public/Pricing';
import { StrategyPartners } from '../../components/Public/StrategyPartners';
import { Stats } from '../../components/Public/Stats';
import { Contact } from '../../components/Public/Contact';
import { CallToAction } from '../../components/Public/CallToAction';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <BelieveInROI />
      <WaveDivider variant="white-to-green" />
      <GuaranteedROI />
      <Vision />
      <Features />
      <ServiceCards />
      <FeaturesGrid />
      <Pricing />
      <StrategyPartners />
      <Stats />
      <Contact />
      <CallToAction />
    </>
  );
};
