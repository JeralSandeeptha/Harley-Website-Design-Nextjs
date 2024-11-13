import { HeroSectionComponentProps } from "@/types/component.types";
import Image from "next/image";
import React from "react";
import number from "../../assets/images/number.png";
import bike from "../../assets/images/bike.png";
import "./Hero.scss";

const Hero = (props: HeroSectionComponentProps) => {
  return (
    <div className="hero">
      <div className="hero-inner">
        <Image src={number} alt="first-image" className="number-image" />
        <div className="hero-content">
          <h4 className="subheader">IRON 883™</h4>
          <h1 className="header">
            Raw, Blacked-Out, <br /> Stripped-Down <br /> Custom Style
          </h1>
          <Image src={bike} alt="bike-image" className="bike-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
