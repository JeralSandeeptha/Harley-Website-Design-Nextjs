import { StylingSectionComponentProps } from "@/types/component.types";
import React from "react";
import bikeImage from "../../assets/images/six.png";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import './Styling.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Styling = (props: StylingSectionComponentProps) => {
  return (
    <div className="styling">
      <div className="overlay">
        <Image src={logo} alt="logo-image" className="logo" />
      </div>
      <div className="styling-inner">
        <div className="styling-top">
          <div className="styling-right">
            <Image src={bikeImage} alt="bike-image" className="bike-image" />
          </div>
          <div className="styling-left">
            <div className="styling-container">
              <h5 className="styling-subtitle">Styling + Features</h5>
              <h5 className="styling-title">
                A Great Leap <br /> Forward In The <br />
                Dark Arts
              </h5>
              <a href="/" className="styling-button">
                view more
              </a>
            </div>
          </div>
        </div>

        <div className="styling-bottom">
          <h5 className="styling-para">
            It’s the poster bike of the anti-chrome movement. You’ve got a black
            powder-coated 883cc engine with black rocker covers. Black on <br />
            the throwback round air cleaner cover. Chopped fenders, to show off
            a little rubber. And black front forks with gators to add a little
            <br />
            old-school nostalgia.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Styling;
