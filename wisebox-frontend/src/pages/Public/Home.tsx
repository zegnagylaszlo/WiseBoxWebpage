import React from 'react';
import { Hero } from '../../components/Public/Hero';
import { BelieveInROI } from '../../components/Public/BelieveInROI';
import { WaveDivider } from '../../components/Public/WaveDivider';
import { GuaranteedROI } from '../../components/Public/GuaranteedROI';
import { WhyWiseBox } from '../../components/Public/WhyWiseBox';
import { ServiceCards } from '../../components/Public/ServiceCards';
import { FeaturesGrid } from '../../components/Public/FeaturesGrid';
import { Pricing } from '../../components/Public/Pricing';
import { StrategyPartners } from '../../components/Public/StrategyPartners';
import { PannonUniversity } from '../../components/Public/PannonUniversity';
import { PartnersGrid } from '../../components/Public/PartnersGrid';
import { StrategicPartnersNew } from '../../components/Public/StrategicPartnersNew';
import { BusinessPartner } from '../../components/Public/BusinessPartner';
import { ReferralOpportunity } from '../../components/Public/ReferralOpportunity';
import { Stats } from '../../components/Public/Stats';
import { Contact } from '../../components/Public/Contact';
import { CallToAction } from '../../components/Public/CallToAction';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyWiseBox />
      <BelieveInROI />
      <FeaturesGrid />
      <Stats />
      <StrategicPartnersNew />
      <WaveDivider variant="white-to-green" />
      <GuaranteedROI />
      <Pricing />
      {/*
      <BusinessPartner />
      */}
      <Contact />
      <ReferralOpportunity />
      {/*
      <ServiceCards />
      <CallToAction />
      */}
    </>
  );
};
