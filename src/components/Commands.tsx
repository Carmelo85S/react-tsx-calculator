import React from 'react'
import { useState } from 'react';
const Commands = () => {

    const changeBackgroundColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundColor(e.target.value);
    }

    const changeButtonColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setButtonColor(e.target.value);
    }

    const changeTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }

    const changeResultColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResultColor(e.target.value);
    }

  return (
    <>
      <div>
        <label htmlFor="BackgroundColor">Background Color</label>
        <input 
          type="color"
          value={backgroundColor}
          onChange={changeBackgroundColor} />
      </div>
      <div>
        <label htmlFor="ButtonColor">Button Color</label>
        <input 
          type="color"
          value={buttonColor}
          onChange={changeButtonColor} />
      </div>
      <div>
        <label htmlFor="TextColor">Text Color</label>
        <input 
          type="color"
          value={color}
          onChange={changeTextColor} />
      </div>
      <div>
        <label htmlFor="ResultColor">Result Color</label>
        <input 
          type="color"
          value={resultColor}
          onChange={changeResultColor} />
      </div>
    </>
  )

}

export default Commands;
