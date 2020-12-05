import React, { useRef, useState, useContext, useEffect } from 'react';
import { ToggleSwitch } from '../toggleswitch/ToggleSwitch';
import { LanguageContext } from '../../context/language/LanguageContext';
import { words } from '../../langues/';
import Logo from '../../assets/logo.png';
import { ReactComponent as FranceIcon } from '../../assets/france.svg';
import { ReactComponent as EnglandIcon } from '../../assets/england.svg';

import './navbar.css';
export const Navbar = () => {
  const languageContext = useContext(LanguageContext);
  const { language, setLanguage } = languageContext;

  const [isOn, setIsOn] = useState(
    window.localStorage.theme === 'dark' ? 'dark' : 'light'
  );
  const Burger = useRef();
  const menuInvi = useRef();
  const [isOpen, setIsOpen] = useState(true);

  const { link1, link2, link3 } = words[language];

  useEffect(() => {
    const getFavoriteLang = window.localStorage.getItem('lang');

    getFavoriteLang === 'fr' ? setLanguage('fr') : setLanguage('en');
  }, [setLanguage]);

  const handleBurger = () => {
    if (isOpen) {
      menuInvi.current.style.visibility = 'visible';
      menuInvi.current.style.opacity = '1';
      menuInvi.current.style.display = 'flex';
      menuInvi.current.style.width = '100vw';
      return setIsOpen(!isOpen);
    }

    menuInvi.current.style.width = '0vw';
    menuInvi.current.style.opacity = '0';
    menuInvi.current.style.visibility = 'hidden';
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <img
          id='EP-LOGO'
          src={Logo}
          onClick={() => window.location.assign('#EP-LOGO')}
          alt='Eric Pierlot'
        />
        <div className='menu-desktop'>
          <ul>
            <li>
              <a href='#about-me'>{link1}</a>
            </li>
            <li>
              <a href='#my-work'>{link2}</a>
            </li>
            <li>
              <a href='#contact-me'>{link3}</a>
            </li>
          </ul>
        </div>
        <div ref={Burger} onClick={handleBurger} className='burger'></div>
        <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
        {language === 'fr' ? (
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onClick={() => {
              setLanguage('en');
              window.localStorage.removeItem('lang');
              window.localStorage.setItem('lang', 'en');
            }}
          >
            EN/<strong>FR</strong>
            <EnglandIcon style={{ marginLeft: '10px' }} alt='icon' />
          </div>
        ) : (
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onClick={() => {
              setLanguage('fr');
              window.localStorage.removeItem('lang');
              window.localStorage.setItem('lang', 'fr');
            }}
          >
            <strong>EN</strong>/FR
            <FranceIcon style={{ marginLeft: '10px' }} alt='icon' />
          </div>
        )}
      </nav>
      <div ref={menuInvi} className='menu-mobile'>
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
    </>
  );
};
