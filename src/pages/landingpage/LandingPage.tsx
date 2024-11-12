import HeroDownSection from '@/components/hero-down-section/HeroDownSection';
import { LandingPageProps } from '@/types/pages.types';
import React from 'react'
import './LandingPage.scss';
import Footer from '@/components/footer/Footer';
import Gallery from '@/components/gallery/Gallery';
import IntroduceSection from '@/components/introduce-section/IntroduceSection';

const LandingPage = (props: LandingPageProps) => {
  return (
    <>
      <HeroDownSection />
      <Gallery />
      <IntroduceSection />
      <Footer />
    </>
  )
}

export default LandingPage;
