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
import LogoFull from "../../components/Logo/LogoFull";
import LandingNavBar from "../../components/LandingNavBar/LandingNavBar";

const LandingPage = () => {
  const { user, isAuthLoading } = useAuth();
  const navigate = useNavigate();

  if (isAuthLoading) {
    return <div>Ładowanie...</div>;
  }

  return (
    <main>
      <section className="banner_section">
        <LandingNavBar/>
      </section>

      <section className="login_section">
        <div className="login_section_half">
          <div className="field1">
            <p>Wejdź na wyższy</p>
            <p><span className="text_fat">level</span> studiowania</p>
          </div>
          <div className="field2">
            <b>Smart Campus</b> to innowacyjna<br></br>
            platforma usprawniająca życie<br></br>
            akademickie ;)
          </div>

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
          <img className="pansimxkolo" src="src\pages\landing-page\pansim.png"></img>
        </div>
        <div className="login_section_half">
          
          <img className="field_img" src="src\pages\landing-page\building.png"></img>
          <img className="arrows_up" src="src/pages/landing-page/arrows_up.png"></img>
          <img className="arrows_left" src="src\pages\landing-page\arrows_left.png"></img>
          <img className="dots0" src="src\pages\landing-page\dots.png"></img>
          <img className="dots1" src="src\pages\landing-page\dots.png"></img>
          <img className="dots2" src="src\pages\landing-page\dots.png"></img>
        </div>
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

      <section className="footer">
        <div className="footer_part">
          <div className="footer_logo_part"><LogoFull colorReverse="reverse"/><p className="beta">BETA</p></div><p>Wersja 1.0</p>
        </div>
        <div className="footer_part">
          <div><p>Skontaktuj się z nami po więcej</p><p>informacji.</p></div>
          <div className="footer_contact">
            <div><p><b>Kontakt</b></p><p><u>smartcampuspansim@gmail.com</u></p></div>
            <div><p><b>Zgłoś błąd</b></p><p>SmartCampusWeb.netlify.app/zglosblad</p></div>
          </div>
        </div>
        <div className="footer_part footer_line">
          <div>
            <p>KNIS 2025-2026 Wszelkie prawa zastrzeżone</p>
          </div>
          <div className="text_flex">
            <p>Informacje o plikach cookie</p>
            <p>Polityka prywatności</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default LandingPage;