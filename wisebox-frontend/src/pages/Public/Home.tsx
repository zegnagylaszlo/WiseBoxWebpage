import React from 'react';
import { Hero } from '../../components/Public/Hero';
import { BelieveInROI } from '../../components/Public/BelieveInROI';
import { BelieveInROI_Solution } from '../../components/Public/BelieveInROI_Solution';
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
import { Testimonials } from '../../components/Public/Testimonials';
import { Contact } from '../../components/Public/Contact';
import { CallToAction } from '../../components/Public/CallToAction';
import { FAQ } from '../../components/Public/FAQ';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyWiseBox />
      {/* <BelieveInROI /> */}
      <BelieveInROI_Solution />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <StrategicPartnersNew />
      <WaveDivider variant="white-to-green" />
      <GuaranteedROI />
      <Pricing />
      <FAQ />
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
