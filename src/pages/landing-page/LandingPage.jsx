import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import GoogleButton from '@components/Buttons/GoogleButton/GoogleButton';
import MainButton from '@components/Buttons/MainButton/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
import './LandingPage.css'

const LandingPage = () => {
  const { user, isAuthLoading } = useAuth();
  const navigate = useNavigate();

  if (isAuthLoading) {
    return <div>Ładowanie...</div>;
  }

  return (
    <main>
      <section className="login_section">
        <div className="banner">
          <div className="logo"><FontAwesomeIcon icon={Icons.SmartCampusLogo} /><b>Smart</b><br></br>Campus</div>
          <div className="option1">O projekcie</div>
          <div className="option2">Lista zmian</div>
          <div className="option3">Nasz zespół</div>
          <MainButton className="button1" type="unique" iconLeft={Icons.faGithub} iconSize="2xl" text="GitHub" ></MainButton>
          <MainButton className="button2" type="primary" iconLeft={Icons.faMoon} iconSize="xl"></MainButton>
        </div>

        <div className="field1">
          Wejdź na wyższy<br></br>
          <b>level</b> studiowania
        </div>
        <div className="field2">
          <b>Smart Campus</b> to innowacyjna<br></br>
          platforma usprawniająca życie<br></br>
          akademickie ;)
        </div>


        <img className="pansim" src="src\pages\landing-page\pansim.png"></img>
        <img className="field_img" src="src\pages\landing-page\building.png"></img>
        <img className="dots0" src="src\pages\landing-page\dots.png"></img>
        <img className="dots1" src="src\pages\landing-page\dots.png"></img>
        <img className="dots2" src="src\pages\landing-page\dots.png"></img>
        {/* Przycisk logowania */}
        {!user ? (
          <div className="login">
            <GoogleButton onClick={() => navigate("/Logowanie")}>
            </GoogleButton>
          </div>
        ) : (
          <div>
            <p>Jesteś zalogowany jako: {user.displayName || user.email}</p>
          </div>
        )}
        {/* /Przycisk logowania */}
      </section>

      <section className="info_section">
        <div className="square1">
          <b>Czym jest?</b><br></br>Smart Campus
        </div>
        <img className="logo_background" src="src\pages\landing-page\logo.svg"></img>

        <div className="square2">
          <img className="dots3" src="src\pages\landing-page\dots.png"></img>
          <div className="sqtext1">Projekt Koła Naukowego Informatyki<br></br> Stosowanej</div>
          <div className="sqtext2">
            Smart Campus to platforma, która łączy wszystko, czego
            <br></br> potrzebuje student - plan zajęć, mapę kampusu i aktualności -
            <br></br> w jednym, intuicyjnym miejscu.
          </div>
          <div className="sq2bottom">
            <div className="sq2bottom_half">
              Zespół Smart Campus:<br></br>
              <div className="sq2bottom_half2">
                <FontAwesomeIcon icon={Icons.faUser}/>
                <FontAwesomeIcon icon={Icons.faUser}/>
                <FontAwesomeIcon icon={Icons.faUser}/>
              </div>
            </div>
            <div className="sq2bottom_half">
              Technologie:
              <div className="sq2bottom_half2">
                <MainButton className="technology_button" type="primary" text="react" onClick={() => window.open('https://react.dev/', '_blank')}/>
                <MainButton className="technology_button" type="primary" text="Firebase" onClick={() => window.open('https://firebase.google.com/', '_blank')}/>
              </div>
              </div>
          </div>
        </div>

        <div className="square3"></div>
        <div className="square4"><img src="src\pages\landing-page\building2.png"></img></div>
        <div className="square5"></div>

      </section>

      <section className="numbers_section"></section>

      <section className="footer"></section>

    </main>
  );
};

export default LandingPage;