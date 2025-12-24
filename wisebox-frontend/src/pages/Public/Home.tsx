import React from 'react';
import { Hero } from '../../components/Public/Hero';
import { BelieveInROI_Solution } from '../../components/Public/BelieveInROI_Solution';
import { GuaranteedROI } from '../../components/Public/GuaranteedROI';
import { WhyWiseBox } from '../../components/Public/WhyWiseBox';
import { FeaturesGrid } from '../../components/Public/FeaturesGrid';
import { Pricing } from '../../components/Public/Pricing';
import { StrategicPartnersNew } from '../../components/Public/StrategicPartnersNew';
import { ReferralOpportunity } from '../../components/Public/ReferralOpportunity';
import { Stats } from '../../components/Public/Stats';
import { Testimonials } from '../../components/Public/Testimonials';
import { Contact } from '../../components/Public/Contact';
import { FAQ } from '../../components/Public/FAQ';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyWiseBox />
      <BelieveInROI_Solution />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <StrategicPartnersNew />
      <GuaranteedROI />
      <Pricing />
      <FAQ />
      <Contact />
      <ReferralOpportunity />
    </>
  );
};
