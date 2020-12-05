import React, { useContext } from 'react';
import './mywork.css';
import Projet1 from '../../../assets/findanddo.jpg';
import Projet2 from '../../../assets/coupons.png';
import { ReactComponent as Github } from '../../../assets/github.svg';
import { ReactComponent as LinkIcon } from '../../../assets/link.svg';
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

            <div>
              <span>
                <a
                  href='https://github.com/ericpierlot/find-and-do'
                  target='blank'
                >
                  <Github />
                </a>
              </span>
              <h5>React / Node.js / Express</h5>
              <span>
                <a href='https://find-and-do.herokuapp.com/' target='blank'>
                  <LinkIcon />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className='contain-pic'>
          <img src={Projet2} alt='Integration website' />
          <div className='cadre-pic'>
            <h5>Featured Project</h5>
            <h3>Coupons</h3>
            <p>A website designed on Dribbble and Integrated by me.</p>
            <div>
              <span>
                <a
                  href='https://github.com/ericpierlot/integrations/tree/master'
                  target='blank'
                >
                  <Github />
                </a>
              </span>
              <h5>React</h5>
              <span>
                <a
                  href='https://ericpierlot.github.io/integrations/'
                  target='blank'
                >
                  <LinkIcon />
                </a>
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
