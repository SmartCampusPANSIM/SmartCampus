import React from 'react';
import './LandingNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
import LogoFull from '../Logo/LogoFull';
import MainButton from '../Buttons/MainButton/MainButton'

function LandingNavBar() {

  return (
    <div class="titleBar">
        <LogoFull/>
        <div class="titleBar-RightSection">
            <nav class="titleBar-RightSection_linkWrapper">
                <p>O projekcie</p>
                <p>Lista zmian</p>
                <p>Nasz zespół</p>
            </nav>
          <MainButton className="github_button" type="unique" iconLeft={Icons.faGithub} iconSize="2xl" text="GitHub" ></MainButton>
          <MainButton className="night_button" type="primary" iconLeft={Icons.faMoon} iconSize="xl"></MainButton>
        </div>
    </div>
  );
}
export default LandingNavBar;