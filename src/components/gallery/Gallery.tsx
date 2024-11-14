import { GallerySectionComponentProps } from "@/types/component.types";
import React from "react";
import "./Gallery.scss";
import eightImage from "../../assets/images/eight.jpeg";
import nineImage from "../../assets/images/four.jpeg";
import tenImage from "../../assets/images/two.jpeg";
import elevenImage from "../../assets/images/three.png";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Gallery = (props: GallerySectionComponentProps) => {
  return (
    <div className="gallery">
      <Image src={eightImage} alt="image" className="gallery-image box" />
      <Image src={nineImage} alt="image" className="gallery-image box" />
      <div className="box-special">
        <h3 className="gallery-header">Need To Know</h3>
        <Link href="/" className="gallery-button">view more</Link>
      </div>
      <Image src={tenImage} alt="image" className="gallery-image box" />
      <Image src={elevenImage} alt="image" className="gallery-image box" />
    </div>
  );
};

export default Gallery;
