import React, { useContext, useRef } from 'react';
import './aboutme.css';
import PortraitPic from '../../../assets/me.png';
import { LanguageContext } from '../../../context/language/LanguageContext';
import { words } from '../../../langues/';

export const AboutMe = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const {
    t1,
    about_me1,
    about_me2,
    about_me3,
    about_me4,
    about_me5,
    about_me6,
    about_me7,
    about_me8,
  } = words[language];

  const sectionAbout = useRef();

  return (
    <section ref={sectionAbout} id='about-me'>
      <div className='title-section'>
        <h1>
          <ul>
            <li value={1}> {t1}</li>
          </ul>
        </h1>
      </div>
      <article>
        <div>
          <p>
            {about_me1}
            {language === 'fr' ? (
              <strong>performante</strong>
            ) : (
              <strong>performant</strong>
            )}
            {about_me2}
            {language === 'fr' ? (
              <strong>parfaitement</strong>
            ) : (
              <strong>perfect</strong>
            )}
            {about_me3}
          </p>
          <p>{about_me4}</p>
          <p>
            {about_me5}
            {language === 'fr' ? (
              <strong>carrière</strong>
            ) : (
              <strong>career</strong>
            )}
            {about_me6}
          </p>
          <p>
            {about_me7}
            <strong>technologies</strong> {about_me8}
          </p>
          <div className='skills'>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>JavaScript (ES6+)</li>
              <li>WordPress</li>
              <li>HTML</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div className='profil'>
            <img src={PortraitPic} alt='Personnal portrait' />
          </div>
        </div>
      </article>
    </section>
  );
};
