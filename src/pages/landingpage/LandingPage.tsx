import HeroDownSection from '@/components/hero-down-section/HeroDownSection';
import { LandingPageProps } from '@/types/pages.types';
import React from 'react'
import './LandingPage.scss';
import Footer from '@/components/footer/Footer';

const LandingPage = (props: LandingPageProps) => {
  return (
    <>
      <HeroDownSection />
      <Footer />
    </>
  )
}

export default LandingPage;
