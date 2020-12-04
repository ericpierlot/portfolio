import React, { useRef } from 'react';
import './card.css';

export const Card = ({ Title = 'Props not defined', Image }) => {
  const imgPic = useRef();
  const card = useRef();

  const cardAnimation = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 105;
    imgPic.current.style.transition = 'all 330ms linear';
    imgPic.current.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg) translateZ(${
      xAxis * 1
    }px) rotateZ(-${xAxis * 1}deg) translateZ(${-yAxis * 5}px)`;
  };

  const cardLeave = () => {
    imgPic.current.style.transform = 'translateZ(0px) rotateZ(0deg)';
  };

  const cardEnter = () => {
    card.current.style.transition = 'none';
  };

  return (
    <div
      ref={card}
      onMouseMove={cardAnimation}
      onMouseLeave={cardLeave}
      onMouseEnter={cardEnter}
      className='contain'
    >
      <div className='card-container'>
        <div className='title'>{Title}</div>
        <div className='picture'>
          <img ref={imgPic} src={Image} alt='my-work-screenshot' />
        </div>
      </div>
    </div>
  );
};
