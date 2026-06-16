import React from 'react';
import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
function LogoFull({ colorReverse }) {
    return (
        <div className="navbar_logo">
            <div className="navbar_logo_icon"/>
            <div className="navbar_logo_wrapper">
            <div className={`navbar_logo_wrapper_topText ${colorReverse}`}>Smart</div>
            <div className={`navbar_logo_wrapper_bottomText ${colorReverse}`}>Campus</div>
            </div>
        </div>   
    )};
export default LogoFull;
