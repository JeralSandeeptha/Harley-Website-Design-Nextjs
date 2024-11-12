import HeroDownSection from '@/components/hero-down-section/HeroDownSection';
import { LandingPageProps } from '@/types/pages.types';
import React from 'react'
import './LandingPage.scss';

const LandingPage = (props: LandingPageProps) => {
  return (
    <>
      <HeroDownSection />
    </>
  )
}

export default LandingPage;
