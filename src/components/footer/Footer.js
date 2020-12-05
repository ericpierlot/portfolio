import React from 'react';
import './footer.css';
import { ReactComponent as Github } from '../../assets/github.svg';
export const Footer = () => {
  return (
    <>
      <div className='separator'></div>
      <footer>
        Designed & Integrated by Eric Pierlot ✌
        <a href='https://github.com/ericpierlot' target='blank'>
          <Github />
        </a>
      </footer>
    </>
  );
};
