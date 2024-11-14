import { IntroduceSectionComponentProps } from '@/types/component.types';
import Image from 'next/image';
import React from 'react';
import nineImage from '../../assets/images/nine.png';
import sevenImage from "../../assets/images/seven.png";
import thirteenImage from "../../assets/images/thirteen.png";
import './IntroduceSection.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IntroduceSection = (props: IntroduceSectionComponentProps) => {
  return (
    <div className="introduce">
      <Image src={nineImage} alt="image" className="intro-image" />
      <div className="intro-right">
        <div className="intro-right-top">
          <div className="intro-header">
            <h1 className="header">Introducing The</h1>
            <h1 className="header">All-New Fxdr 114</h1>
          </div>
          <h5 className="intro-para">
            Fast on the straights, agile in the turns. Take a ride. It will blow
            you away.
          </h5>
          <a href="/" className="intro-button">
            read more
          </a>
        </div>
        <div className="intro-right-bottom">
          <Image src={thirteenImage} alt="image" className="intro-image" />
          <Image src={sevenImage} alt="image" className="intro-image" />
        </div>
      </div>
    </div>
  );
}

export default IntroduceSection;
