import React from 'react';
import './MainButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
const MainButton = ({ text, onClick, type, iconLeft, iconRight }) => {

  return (
    <button onClick={onClick} className={`default ${type}`}>
      <FontAwesomeIcon icon={iconLeft}/>
      {text}
      <FontAwesomeIcon icon={iconRight}/>
    </button>
  );
}
export default MainButton;