import React, { useRef, useEffect, useContext } from 'react';
import { AboutMe } from './aboutme/AboutMe';
import { MyWork } from './mywork/MyWork';
import { ContactMe } from './contactme/ContactMe';

import { LanguageContext } from '../../context/language/LanguageContext';
import { words } from '../../langues/';

import './contenu.css';
export const Contenu = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const { hi, what, self, self2, contactme } = words[language];

  const titleContent = useRef();

  useEffect(() => {
    titleContent.current.style.opacity = 1;
    titleContent.current.style.transform = 'translateY(0px)';
    return () => {};
  }, []);

  return (
    <main>
      <section id='intro'>
        <div ref={titleContent} className='content'>
          <h5>{hi}</h5>
          <h3>Eric Pierlot.</h3>
          <h4>{what}</h4>
          <p>
            {self}
            {language === 'fr' ? (
              <strong>totalement libre</strong>
            ) : (
              <strong>free to travel everywhere</strong>
            )}{' '}
            {self2}
          </p>
          <button onClick={() => window.location.assign('#contact-me')}>
            {contactme}
          </button>
        </div>
      </section>
      <div className='contain-scroll'>
        <span onClick={() => window.scrollTo(0, 0)} id='scrollToTop'>
          ☝
        </span>
      </div>
      <AboutMe />
      <MyWork />
      <ContactMe />
    </main>
  );
};
