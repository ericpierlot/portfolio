import React, { useRef, useContext, useState } from 'react';

import { LanguageContext } from '../../../context/language/LanguageContext';
import { words } from '../../../langues/';

import './contactme.css';
import Logo from '../../../assets/logo.png';
import { ToggleSwitch } from '../../toggleswitch/ToggleSwitch';
import { ReactComponent as FranceIcon } from '../../../assets/france.svg';
import { ReactComponent as EnglandIcon } from '../../../assets/england.svg';

export const ContactMe = () => {
  const languageContext = useContext(LanguageContext);
  const { language, setLanguage } = languageContext;
  const {
    t3,
    nameLang,
    subjectLang,
    messageLang,
    sendLang,
    link1,
    link2,
    link3,
  } = words[language];
  const [isOpen, setIsOpen] = useState(false);

  const Burger = useRef();
  const menuInvi = useRef();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const handleName = (e) => {
    setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  };
  const handleSubject = (e) => {
    setSubject(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  };
  const handleMessage = (e) => {
    setMessage(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  };

  const onWriteName = name ? (
    <span>
      <strong>From: </strong>
      {name}
    </span>
  ) : (
    ''
  );
  const onWriteSubject = subject ? (
    <span>
      <strong>Subject: </strong>
      {subject}
    </span>
  ) : (
    ''
  );

  const onWriteMessage = message ? (
    <span>
      <strong>Message: </strong>
      {message}
    </span>
  ) : (
    ''
  );

  const handleBurger = () => {
    if (isOpen) {
      menuInvi.current.style.visibility = 'visible';
      menuInvi.current.style.opacity = '1';
      menuInvi.current.style.display = 'flex';
      menuInvi.current.style.width = '300px';
      return setIsOpen(!isOpen);
    }

    menuInvi.current.style.width = '0vw';
    menuInvi.current.style.opacity = '0';
    menuInvi.current.style.visibility = 'hidden';
    return setIsOpen(!isOpen);
  };

  return (
    <section id='contact-me'>
      <div className='title-section'>
        <h1>
          <ul>
            <li value={3}> {t3}</li>
          </ul>
        </h1>
      </div>
      <article>
        <div className='container-computer'>
          <div className='computer'>
            <div className='border-ecran'>
              <div className='ecran'>
                <div className='ecran-nav'>
                  <img
                    src={Logo}
                    alt='logo'
                    onClick={() => window.location.assign('#EP-LOGO')}
                  />
                  <div
                    ref={Burger}
                    onClick={handleBurger}
                    className='burgerC'
                  ></div>
                  <div className='menu-desktop-computer'>
                    <ul>
                      <li>
                        <a href='#about-me'>About me.</a>
                      </li>
                      <li>
                        <a href='#my-work'>My work.</a>
                      </li>
                      <li>
                        <a href='#contact-me'>Contact me.</a>
                      </li>
                    </ul>
                  </div>
                  <ToggleSwitch />
                  {language === 'fr' ? (
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => setLanguage('en')}
                    >
                      <EnglandIcon alt='icon' />
                    </div>
                  ) : (
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => setLanguage('fr')}
                    >
                      <FranceIcon alt='icon' />
                    </div>
                  )}
                </div>
                <div ref={menuInvi} className='menu-mobile-computer'>
                  <ul>
                    <li>
                      <a href='#about-me' onClick={handleBurger}>
                        {link1}
                      </a>
                    </li>
                    <li>
                      <a href='#my-work' onClick={handleBurger}>
                        {link2}
                      </a>
                    </li>
                    <li>
                      <a href='#contact-me' onClick={handleBurger}>
                        {link3}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='contain'>
                  <div className='ecran-title'>
                    <ul>
                      <li>
                        <h2>{t3}</h2>
                      </li>
                    </ul>
                  </div>
                  <div className='ecran-form'>
                    <p>{onWriteName}</p>
                    <p>{onWriteSubject}</p>
                    <p>{onWriteMessage}</p>
                    <button>Send</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='dessous-ecran'></div>
          </div>
        </div>
        <div className='contact-form'>
          <label htmlFor='name'>{nameLang}</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={handleName}
          />
          <label htmlFor='subject'>{subjectLang}</label>
          <input
            id='subject'
            type='text'
            name='subject'
            value={subject}
            onChange={handleSubject}
          />
          <label htmlFor='yourmessage'>{messageLang}</label>
          <textarea
            name='message'
            id='yourmessage'
            cols='30'
            rows='10'
            value={message}
            onChange={handleMessage}
          />
        </div>
        <div className='confirm'>
          <button>{sendLang}</button>
        </div>
      </article>
    </section>
  );
};
