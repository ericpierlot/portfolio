import React, { useEffect, useState } from 'react';
import './toggleswitch.css';

export const ToggleSwitch = ({ isOn, setIsOn }) => {
  const [isChecked, setIsChecked] = useState(
    window.localStorage.theme === 'dark' ? true : false
  );
  useEffect(() => {
    const getFavoriteTheme = window.localStorage.getItem('theme');
    if (getFavoriteTheme === 'light') {
      document.body.setAttribute('data-theme', '');
      setIsChecked(false);
    }

    if (getFavoriteTheme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      setIsChecked(true);
    }
  }, [setIsChecked]);

  const changeMode = () => {
    if (isOn === 'light') {
      setIsOn('dark');
      setIsChecked(true);

      document.body.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    }

    if (isOn === 'dark') {
      setIsOn('light');
      setIsChecked(false);

      document.body.setAttribute('data-theme', '');
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-checkbox'
        name='toggleSwitch'
        id='toggleSwitch'
        onChange={changeMode}
        checked={isChecked}
      />
      <label className='toggle-switch-label' htmlFor='toggleSwitch'>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  );
};
