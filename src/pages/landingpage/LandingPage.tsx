import HeroDownSection from '@/components/hero-down-section/HeroDownSection';
import { LandingPageProps } from '@/types/pages.types';
import React from 'react'
import './LandingPage.scss';
import Footer from '@/components/footer/Footer';
import Gallery from '@/components/gallery/Gallery';
import IntroduceSection from '@/components/introduce-section/IntroduceSection';
import MoreRoads from '@/components/moreroads/MoreRoads';
import Hero from '@/components/hero/Hero';
import Features from '@/components/features/Features';
import NewRider from '@/components/new-rider/NewRider';
import Styling from '@/components/styling/Styling';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LandingPage = (props: LandingPageProps) => {
  return (
    <>
      <Hero />
      <HeroDownSection />
      <NewRider />
      <Gallery />
      <Features />
      <IntroduceSection />
      <MoreRoads />
      <Styling />
      <Footer />
    </>
  )
}

export default LandingPage;
