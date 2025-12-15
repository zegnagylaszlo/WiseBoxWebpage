import React from 'react';
import { Hero } from '../../components/Public/Hero';
import { Features } from '../../components/Public/Features';
import { ServiceCards } from '../../components/Public/ServiceCards';
import { CallToAction } from '../../components/Public/CallToAction';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <ServiceCards />
      <CallToAction />
    </>
  );
};
