import { HeroDownSectionComponentProps } from '@/types/component.types'
import React from 'react'
import './HeroDownSection.scss';
import Image from 'next/image';
import bikeLogo from '../../assets/icons/image-removebg-preview-3.png';
import cartLogo from '../../assets/icons/image-removebg-preview-4.png';

const HeroDownSection = (props: HeroDownSectionComponentProps) => {
  return (
    <div className="hero-down">
      <div className="hero-down-inner">
        <div className="hero-down-inner-left">
          <Image src={bikeLogo} alt="bike-logo" className="logo" />
          <h1 className="feature-title">Motorcycle</h1>
        </div>
        <div className="hero-down-inner-right">
          <Image src={cartLogo} alt="cart-logo" className="logo" />
          <h1 className="feature-title">Shopping Tools</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroDownSection;