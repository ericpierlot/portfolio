import React from 'react';
import './toggleswitch.css';

export const ToggleSwitch = ({ isOn, setIsOn }) => {
  const changeMode = () => {
    setIsOn(!isOn);
    isOn
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  };

  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-checkbox'
        name='toggleSwitch'
        id='toggleSwitch'
        onChange={changeMode}
      />
      <label className='toggle-switch-label' htmlFor='toggleSwitch'>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  );
};
