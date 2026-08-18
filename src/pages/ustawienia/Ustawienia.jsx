import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@icons/icons';
import './ustawienia.css';

function Ustawienia() {
  const navigate = useNavigate();
  return (
    <div className="app ustawienia_container">
      <button className="mobile_back_button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={Icons.faArrowLeft} /> Wstecz
      </button>
      <h1>Ustawienia</h1>
    </div>
  );
}

export default Ustawienia;
