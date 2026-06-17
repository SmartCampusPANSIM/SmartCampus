import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import GoogleButton from '@components/Buttons/GoogleButton/GoogleButton';
import ContinueButton from '@components/Buttons/ContinueButton/ContinueButton';
import MainButton from '@components/Buttons/MainButton/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@icons/icons';
import './LandingPage.css';
import Lekcja from "../plan-lekcji/Lekcja";
import { color, scale } from "framer-motion";
import LogoFull from "../../components/Logo/LogoFull";
import LandingNavBar from "../../components/LandingNavBar/LandingNavBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const LandingPage = () => {
  const { user, isAuthLoading } = useAuth();
  const navigate = useNavigate();

  if (isAuthLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main>
      <section className="banner_section">
        <LandingNavBar />
      </section>

      <section className="login_section">
        <div className="field1">
          <img className="arrows_up" src="src/pages/landing-page/arrows_up.png"></img>
          <p>Wejdź na wyższy</p>
          <p><span className="text_fat text_highlight">level</span> studiowania</p>
        </div>
        <div className="field2">
          <p><span className="text_fat text_highlight">Smart Campus</span> to innowacyjna</p>
          <p>platforma usprawniająca życie</p>
          <p>akademickie!</p>
        </div>

        {!user ? (
        <div className="field3">
          <img className="arrows_left" src="src\pages\landing-page\arrows_left.png"></img>
          <GoogleButton onClick={() => navigate("/Logowanie")}>
          </GoogleButton>
        </div>
        ) : (
        <div className="field3">
          <img className="arrows_left" src="src\pages\landing-page\arrows_left.png"></img>
          <ContinueButton onClick={() => navigate("/Panel")}>
          </ContinueButton>
        </div>
        )}
        <div className="field4">
          <img src="src\pages\landing-page\pansim.png"></img>
        </div>
        <div className="field5">
          <img className="field5_img" src="src\pages\landing-page\building.png"></img>
          <img className="dots0" src="src\pages\landing-page\dots.png"></img>
          <img className="dots1" src="src\pages\landing-page\dots.png"></img>
          <img className="dots2" src="src\pages\landing-page\dots.png"></img>
        </div>
      </section>

      <section className="info_section">

        <div className="info_section_half">
          <div className="square1">
            <span className="fat_text">Czym jest?</span>Smart Campus
            <img className="logo_background" src="src\pages\landing-page\logo.svg"></img>
          </div>


          <div className="square2">
            <img className="dots3" src="src\pages\landing-page\dots.png"></img>
            <div className="sqtext1">
              <p>Projekt Koła Naukowego Informatyki</p>
              <p>Stosowanej</p>
            </div>
            <div className="sqtext2">
              <p>Smart Campus to platforma, która łączy wszystko, czego</p>
              <p>potrzebuje student - plan zajęć, mapę kampusu i aktualności -</p>
              <p>w jednym, intuicyjnym miejscu.</p>
            </div>
            <div className="sq2bottom">
              <div className="sq2bottom_half">
                <p>Zespół Smart Campus:</p>
                <div className="sq2bottom_half2">
                  <FontAwesomeIcon icon={Icons.faUser} />
                  <FontAwesomeIcon icon={Icons.faUser} />
                  <FontAwesomeIcon icon={Icons.faUser} />
                </div>
              </div>
              <div className="sq2bottom_half">
                <p>Technologie:</p>
                <div className="sq2bottom_half2">
                  <MainButton className="technology_button" type="primary" text="React" onClick={() => window.open('https://react.dev/', '_blank')}/>
                  <MainButton className="technology_button" type="primary" text="Firebase" onClick={() => window.open('https://firebase.google.com/', '_blank')}/>
                </div>
                </div>
              </div>
            </div>
          </div>
        <div className="info_section_half">
          <div className="square3">
            <div className="square_wrapper">
              <div><div className="circle"><FontAwesomeIcon icon={Icons.faCalendarDays} color="white" size="xl"/></div></div>
              <div className="sqtext3">Plan zajęć</div>
              <div className="sqtext2">
                <p>Wygodny, dynamiczny plan zajęć oraz</p>
                <p>czytelny terminarz zjazdów. Od teraz</p>
                <p>niczego nie przegapisz!</p>
              </div>
              <div className="lekcja"><img src="src\pages\landing-page\lekcja.png"></img></div>
            </div>
          </div>
          <div className="square4"><img src="src\pages\landing-page\building2.png"></img></div>
          <div className="square5">
            <div className="square_wrapper">
              <div><div className="circle"><FontAwesomeIcon icon={Icons.faMap} color="white" size="xl"/></div></div>
              <div className="sqtext3">Mapa kampusu</div>
              <div className="sqtext2">
                <p>Łatwa, przejrzysta i wygodna, </p>
                <p>pomoże Ci poruszać się po kampusie</p>
                <p> oraz najbliżeszej okolicy.</p>
              </div>
              <div className="lekcja"><img src="src\pages\landing-page\map.png"></img></div>
            </div>
          </div>
        </div>
      </section>

      <section className="numbers_section">
        <div className="numbers_section_title"><p>Smart Campus w liczbach</p></div>
        <div className="numbers_section_bottom">

          <div className="numbers">
            <div className="nr_top"><FontAwesomeIcon icon={Icons.faUser}/></div>
            <div className="numbers_wrapper">
              <div className="nr_bot_txt1"><p>2</p></div>
              <div className="nr_bot_txt2"><p>Użytkowników platformy</p></div>
            </div>
          </div>

          <div className="numbers">
            <div className="nr_modules">
              <div className="numbers_wrapper">
                <div className="nr_bot_txt1 modules_txt_adjust"><p>5</p></div>
                <div className="nr_bot_txt2 modules_txt_adjust"><p>Smart modułów</p></div>
              </div>
            </div>
          </div>

          <div className="numbers">
            <img className="nr_top" src="src\pages\landing-page\building3.png"></img>
            <div className="numbers_wrapper">
              <div className="nr_bot_txt1"><p>2</p></div>
              <div className="nr_bot_txt2"><p>Budynki objęte projektem</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footer_part1">
          <div className="footer_logo_part"><LogoFull colorReverse="reverse" /><p className="beta">BETA</p></div><p>Wersja 1.0</p>
        </div>
        <div className="footer_part2">
          <div><p>Skontaktuj się z nami po więcej</p><p>informacji.</p></div>
          <div className="footer_contact">
            <div>
              <p><span className="text_fat">Kontakt</span></p>
              <p><span className="text_underline">smartcampuspansim@gmail.com</span></p></div>
            <div>
              <p><span className="text_fat">Zgłoś błąd</span></p>
              <p>SmartCampusWeb.netlify.app/zglosblad</p>
            </div>
          </div>
        </div>
        <div className="footer_part3 footer_line">
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