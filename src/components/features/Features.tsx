import React from 'react'
import './Features.scss';
import { FeaturesSectionComponentProps } from '@/types/component.types';
import Image from 'next/image';
import one from '../../assets/icons/image-removebg-preview-1.png';
import two from '../../assets/icons/image-removebg-preview-2.png';
import three from '../../assets/icons/image-removebg-preview-3.png';
import preview from "../../assets/icons/image-removebg-preview.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Features = (props: FeaturesSectionComponentProps) => {
  return (
    <div className="features">
      <div className="overlay"></div>
      <div className="features-inner">
        <div className="feature">
          <Image src={preview} alt="feature-logo" className="feature-logo" />
          <h1 className="feature-title">How Much Does It Coast</h1>
          <h5 className="feature-subtitle">read more</h5>
        </div>
        <div className="feature">
          <Image src={two} alt="feature-logo" className="feature-logo" />
          <h1 className="feature-title">What Will I Need To Register?</h1>
          <h5 className="feature-subtitle">read more</h5>
        </div>
        <div className="feature">
          <Image src={one} alt="feature-logo" className="feature-logo" />
          <h1 className="feature-title">Do I Need Any Special Gear?</h1>
          <h5 className="feature-subtitle">read more</h5>
        </div>
        <div className="feature">
          <Image src={three} alt="feature-logo" className="feature-logo" />
          <h1 className="feature-title">What Bike Will I Ride?</h1>
          <h5 className="feature-subtitle">read more</h5>
        </div>
      </div>
    </div>
  );
};

export default Features
