import { NewRiderSectionComponentProps } from "@/types/component.types";
import "./NewRide.scss";
import Image from "next/image";
import React from "react";
import bikeImage from "../../assets/images/twelve.png";
import logo from "../../assets/images/logo.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewRider = (props: NewRiderSectionComponentProps) => {
  return (
    <div className="new-rider">
      <div className="overlay">
        <Image src={logo} alt="logo-image" className="logo" />
      </div>
      <div className="new-rider-inner">
        <div className="new-rider-top">
          <div className="new-rider-left">
            <div className="new-rider-container">
              <h5 className="new-rider-subtitle">New Rider</h5>
              <h5 className="new-rider-title">
                New Rider <br /> Course <br />
                Overview
              </h5>
              <a href="/" className="new-rider-button">
                view more
              </a>
            </div>
          </div>

          <div className="new-rider-right">
            <Image src={bikeImage} alt="bike-image" className="bike-image" />
          </div>
        </div>

        <div className="new-rider-bottom">
          <h5 className="new-rider-para">
            Never ridden before? Don't sweat it. The Harley-Davidson® Riding
            Academy New Rider Course is designed to get you comfortable on a
            bike <br />
            and give you the skills you need to ride with confidence.Offered at
            select H-D® dealers, the New Rider Course provides you with expert
            <br />
            guidance from H-D certified coaches.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NewRider;
