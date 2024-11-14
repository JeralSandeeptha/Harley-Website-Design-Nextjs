import { NewRiderSectionComponentProps } from "@/types/component.types";
import "./NewRide.scss";
import Image from "next/image";
import React from "react";
import bikeImage from "../../assets/images/twelve.png";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

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
              <Link href="/" className="new-rider-button">
                view more
              </Link>
            </div>
          </div>

          <div className="new-rider-right">
            <Image src={bikeImage} alt="bike-image" className="bike-image" />
          </div>
        </div>

        <div className="new-rider-bottom">
          It is the poster bike of the anti-chrome movement. You have got a
          black powder-coated 883cc engine with black rocker covers. Black on{" "}
          <br />
          the throwback round air cleaner cover. Chopped fenders, to show off a
          little rubber. And black front forks with gators to add a little
          <br />
          old-school nostalgia.
        </div>
      </div>
    </div>
  );
};

export default NewRider;
