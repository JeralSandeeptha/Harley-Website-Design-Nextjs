import HeroDownSection from '@/components/hero-down-section/HeroDownSection';
import { LandingPageProps } from '@/types/pages.types';
import React from 'react'
import './LandingPage.scss';
import Footer from '@/components/footer/Footer';
import Gallery from '@/components/gallery/Gallery';

const LandingPage = (props: LandingPageProps) => {
  return (
    <>
      <HeroDownSection />
      <Gallery />
      <Footer />
    </>
  )
}

export default LandingPage;
