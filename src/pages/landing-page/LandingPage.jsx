import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import GoogleButton from '@components/Buttons/GoogleButton/GoogleButton';
import ContinueButton from '@components/Buttons/ContinueButton/ContinueButton';
import MainButton from '@components/Buttons/MainButton/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@icons/icons';
import './LandingPage.css';
import arrowsUp from './arrows_up.png';
import arrowsLeft from './arrows_left.png';
import pansim from './pansim.png';
import building from './building.png';
import dots from './dots.png';
import logoBackground from './logo.svg';
import lekcja from './lekcja.png';
import building2 from './building2.png';
import building3 from './building3.png';
import mapImg from './map.png';
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
        <div className="login_section_half1">
          <div className="field1">
            <img className="arrows_up" src={arrowsUp} alt="arrows up" />
            <p>Wejdź na wyższy</p>
            <p><span className="text_fat">level</span> studiowania</p>
          </div>
          <div className="field2">
            <p><span className="text_fat">Smart Campus</span> to innowacyjna</p>
            <p>platforma usprawniająca życie</p>
            <p>akademickie!</p>
          </div>

          {!user ? (
            <div className="field3">
              <img className="arrows_left" src={arrowsLeft} alt="arrows left" />
              <GoogleButton onClick={() => navigate("/Logowanie")}>
              </GoogleButton>
            </div>
          ) : (
            <div className="field3">
              <img className="arrows_left" src={arrowsLeft} alt="arrows left" />
              <ContinueButton onClick={() => navigate("/Panel")}>
              </ContinueButton>
            </div>
          )}
          <img className="field4" src={pansim} alt="pansim" />
        </div>
        <div className="login_section_half2">
          <div className="field5">
            <img className="field5_img" src={building} alt="building" />
            <img className="dots0" src={dots} alt="dots" />
            <img className="dots1" src={dots} alt="dots" />
            <img className="dots2" src={dots} alt="dots" />
          </div>
        </div>
      </section>

      <section className="info_section">

        <div className="info_section_half">
          <div className="square1">
            <span className="fat_text">Czym jest?</span>Smart Campus
            <img className="logo_background" src={logoBackground} alt="logo background" />
          </div>


          <div className="square2">
            <img className="dots3" src={dots} alt="dots" />
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
                  <MainButton className="technology_button" type="primary" text="React" onClick={() => window.open('https://react.dev/', '_blank')} />
                  <MainButton className="technology_button" type="primary" text="Firebase" onClick={() => window.open('https://firebase.google.com/', '_blank')} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info_section_half">
          <div className="square3">
            <div><div className="circle"><FontAwesomeIcon icon={Icons.faCalendarDays} color="white" size="xl" /></div></div>
            <div className="sqtext3">Plan zajęć</div>
            <div className="sqtext2">
              <p>Wygodny, dynamiczny plan zajęć oraz</p>
              <p>czytelny terminarz zjazdów. Od teraz</p>
              <p>niczego nie przegapisz!</p>
            </div>
            <img className="lekcja" src={lekcja} alt="lekcja" />
          </div>
          <img className="square4" src={building2} alt="building 2" />
          <div className="square5">
            <div><div className="circle"><FontAwesomeIcon icon={Icons.faMap} color="white" size="xl" /></div></div>
            <div className="sqtext3">Plan zajęć</div>
            <div className="sqtext2">
              <p>Wygodny, dynamiczny plan zajęć oraz</p>
              <p>czytelny terminarz zjazdów. Od teraz</p>
              <p>niczego nie przegapisz!</p>
            </div>
            <img className="lekcja" src={mapImg} alt="map" />
          </div>
        </div>
      </section>

      <section className="numbers_section">
        <div className="numbers_section_title"><p>Smart Campus w liczbach</p></div>
        <div className="numbers_section_bottom">

          <div className="numbers">
            <div className="nr_top"><FontAwesomeIcon icon={Icons.faUser} /></div>
            <div className="nr_bot_txt1"><p>2</p></div>
            <div className="nr_bot_txt2"><p>Użytkowników platformy</p></div>
          </div>

          <div className="numbers">
            <div className="nr_modules">
              <div className="nr_bot_txt1 modules_txt_adjust"><p>5</p></div>
              <div className="nr_bot_txt2 modules_txt_adjust"><p>Smart modułów</p></div>
            </div>
          </div>

          <div className="numbers">
            <img className="nr_top" src={building3} alt="building 3" />
            <div className="nr_bot_txt1"><p>2</p></div>
            <div className="nr_bot_txt2"><p>Budynki objęte projektem</p></div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footer_part">
          <div className="footer_logo_part"><LogoFull colorReverse="reverse" /><p className="beta">BETA</p></div><p>Wersja 1.0</p>
        </div>
        <div className="footer_part">
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