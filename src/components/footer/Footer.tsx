import React from 'react';
import './Footer.scss';
import { FooterSectionComponentProps } from '@/types/component.types';

const Footer = (props: FooterSectionComponentProps) => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <h5 className="footer-title">Template created by Jeral Sandeeptha</h5>
      </div>
    </div>
  );
}

export default Footer;
