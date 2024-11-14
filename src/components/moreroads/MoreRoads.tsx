import { MoreRoadsSectionComponentProps } from '@/types/component.types'
import React from 'react';
import './MoreRoads.scss';
import Image from 'next/image';
import gangImage from '../../assets/images/gang.jpeg';
import seatImage from '../../assets/images/one.png';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MoreRoads = (props: MoreRoadsSectionComponentProps) => {
  return (
    <div className="more">
      <div className="more-left">
        <Image src={gangImage} alt="gang-image" className="gang-image" />
        <div className="more-para-section">
          <h5 className="more-para">
            We’re taking the thrill of riding into the future and we’re <br />
            bringing you along for the ride.
          </h5>
        </div>
      </div>
      <div className="more-right">
        <div className="more-title-section">
          <h1 className="more-title">More Roads To H-D</h1>
        </div>
        <Image src={seatImage} alt="seat-image" className="seat-image" />
      </div>
    </div>
  );
}

export default MoreRoads
