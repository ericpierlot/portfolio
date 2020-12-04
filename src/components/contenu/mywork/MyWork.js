import React, { useContext } from 'react';
import './mywork.css';
import Projet1 from '../../../assets/website-dribble.png';
import { LanguageContext } from '../../../context/language/LanguageContext';
import { words } from '../../../langues/';

export const MyWork = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const { t2 } = words[language];
  return (
    <section id='my-work'>
      <div className='title-section'>
        <h1>
          <ul>
            <li value={2}> {t2}</li>
          </ul>
        </h1>
      </div>
      <article>
        <div className='contain-pic'>
          <img src={Projet1} alt='Integration website' />
          <div className='cadre-pic'>
            <h5>Featured Project</h5>
            <h3>Find & Do</h3>
            <p>
              A web app for looking experiences to do in a city or around
              (experiences stocked in DB, created by the users)
            </p>
            <h5>React Node.js Express</h5>
            <span>Github Link - Demo Link</span>
          </div>
        </div>
        <div className='contain-pic'>
          <img src={Projet1} alt='Integration website' />
          <div className='cadre-pic'>
            <h5>Featured Project</h5>
            <h3>Find & Do</h3>
            <p>
              A web app for looking experiences to do in a city or around
              (experiences stocked in DB, created by the users)
            </p>
            <h5>React Node.js Express</h5>
            <span>Github Link - Demo Link</span>
          </div>
        </div>
        <div className='contain-pic'>
          <img src={Projet1} alt='Integration website' />
          <div className='cadre-pic'>
            <h5>Featured Project</h5>
            <h3>Find & Do</h3>
            <p>
              A web app for looking experiences to do in a city or around
              (experiences stocked in DB, created by the users)
            </p>
            <h5>React Node.js Express</h5>
            <span>Github Link - Demo Link</span>
          </div>
        </div>
      </article>
    </section>
  );
};
