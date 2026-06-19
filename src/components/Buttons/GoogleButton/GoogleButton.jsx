import React from 'react';
import './GoogleButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
import googleIcon from './google.png';

function GoogleButton({ onClick }) {

  return (
    <button onClick={onClick} className="googleButton">
      {/* <FontAwesomeIcon icon={Icons.faGoogle} size='2xl'/> */}
      <img className='googleButton-googleIcon' src={googleIcon} alt="Google" />
      <section className='googleButton-textWrapper'>
        <div className='googleButton-textWrapper-mainText'>Zaloguj się</div>
        <div className='googleButton-textWrapper-bottomText'>Uczelnianym kontem google</div>
      </section>
    </button>
  );
}
export default GoogleButton;