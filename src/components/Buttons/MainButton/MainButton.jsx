import React from 'react';
import './MainButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
const MainButton = ({ text, onClick, type, iconLeft, iconRight, iconSize, className}) => {

  return (
    <button onClick={onClick} className={`default ${type} ${className}`}>
      <FontAwesomeIcon icon={iconLeft} size={iconSize}/>
      {text}
      <FontAwesomeIcon icon={iconRight} size={iconSize}/>
    </button>
  );
}
export default MainButton;