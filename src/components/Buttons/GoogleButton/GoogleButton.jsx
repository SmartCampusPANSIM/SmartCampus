import React from 'react';
import './GoogleButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
function GoogleButton({ onClick }) {

  return (
    <button onClick={onClick} className="google">
      {/* <FontAwesomeIcon icon={Icons.faGoogle} size='2xl'/> */}
      <img src=".\src\components\Buttons\GoogleButton\google.png"/>
      <section className='google_text'>
        <div className='google_text1'>Zaloguj się</div>
        <div className='google_text2'>Uczelnianym kontem google</div>
      </section>
    </button>
  );
}
export default GoogleButton;