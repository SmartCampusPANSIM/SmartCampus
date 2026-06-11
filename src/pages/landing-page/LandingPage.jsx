import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import GoogleButton from '@components/Buttons/GoogleButton/GoogleButton';
import MainButton from '@components/Buttons/MainButton/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@icons/icons';
import './LandingPage.css';
import Lekcja from "../plan-lekcji/Lekcja";
import { color, scale } from "framer-motion";

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
        <img className="arrows_up" src="src/pages/landing-page/arrows_up.png"></img>
        <img className="arrows_left" src="src\pages\landing-page\arrows_left.png"></img>
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

        <div className="info_section_half">
          <div className="square1">
            <b>Czym jest?</b>Smart Campus
            <img className="logo_background" src="src\pages\landing-page\logo.svg"></img>
          </div>
          

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
        </div>
        <div className="info_section_half">
          <div className="square3">
            <div className="circle"><FontAwesomeIcon icon={Icons.faCalendarDays} color="white" size="xl"/></div>
            <div className="sqtext3">Plan zajęć</div>
            <div className="sqtext2">Wygodny, dynamiczny plan zajęć oraz<br></br>
              czytelny terminarz zjazdów. Od teraz<br></br>
              niczego nie przegapisz!
            </div>
            <img className="lekcja" src="src\pages\landing-page\lekcja.png"></img>
          </div>
          <img className="square4"src="src\pages\landing-page\building2.png"></img>
          <div className="square5">
            <div className="circle"><FontAwesomeIcon icon={Icons.faMap} color="white" size="xl"/></div>
            <div className="sqtext3">Plan zajęć</div>
            <div className="sqtext2">Wygodny, dynamiczny plan zajęć oraz<br></br>
              czytelny terminarz zjazdów. Od teraz<br></br>
              niczego nie przegapisz!
            </div>
            <img className="lekcja" src="src\pages\landing-page\map.png"></img>
          </div>
        </div>
      </section>

      <section className="numbers_section">
        <div className="numbers_section_title">Smart Campus w liczbach</div>
        <div className="numbers_section_bottom">

          <div className="numbers">
            <div className="nr_top"><FontAwesomeIcon icon={Icons.faUser}/></div>
            <div className="nr_bot_txt1">2</div>
            <div className="nr_bot_txt2">Użytkowników platformy</div>
          </div>

          <div className="numbers">
          <div className="nr_modules">
            <div className="nr_bot_txt1 modules_txt_adjust">5</div>
            <div className="nr_bot_txt2 modules_txt_adjust">Smart modułów</div>
          </div>
          </div>

          <div className="numbers">
            <img className="nr_top" src="src\pages\landing-page\building3.png"></img>
            <div className="nr_bot_txt1">2</div>
            <div className="nr_bot_txt2">Budynki objęte projektem</div>
          </div>
        </div>
      </section>

      <section className="footer"></section>

    </main>
  );
};

export default LandingPage;