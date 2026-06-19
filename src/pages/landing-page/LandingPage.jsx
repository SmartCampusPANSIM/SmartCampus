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
      <section className="LandingBanner">
        <LandingNavBar />
      </section>

      <section className="LandingLogin">
        <div className="LandingLogin__field1">
          <img className="LandingLogin__arrowsUp" src="src/pages/landing-page/arrows_up.png"></img>
          <p>Wejdź na wyższy</p>
          <p><span className="text_fat text_highlight">level</span> studiowania</p>
        </div>
        <div className="LandingLogin__field2">
          <p><span className="text_fat text_highlight">Smart Campus</span> to innowacyjna</p>
          <p>platforma usprawniająca życie</p>
          <p>akademickie!</p>
        </div>

        {!user ? (
        <div className="LandingLogin__field3">
          <img className="LandingLogin__arrowsLeft" src="src\pages\landing-page\arrows_left.png"></img>
          <GoogleButton onClick={() => navigate("/Logowanie")}>
          </GoogleButton>
        </div>
        ) : (
        <div className="LandingLogin__field3">
          <img className="LandingLogin__arrowsLeft" src="src\pages\landing-page\LandingLogin__arrowsLeft.png"></img>
          <ContinueButton onClick={() => navigate("/Panel")}>
          </ContinueButton>
        </div>
        )}
        <div className="LandingLogin__field4">
          <img src="src\pages\landing-page\pansim.png"></img>
          <p className="text_x">X</p>
          <div>
            <p>Koło naukowe</p>
            <p>informatyki stosowanej</p>
          </div>
        </div>
        <div className="LandingLogin__field5">
          <img className="LandingLogin__field5_img" src="src\pages\landing-page\building.png"></img>
          <img className="LandingLogin__dots0" src="src\pages\landing-page\dots.png"></img>
          <img className="LandingLogin__dots1" src="src\pages\landing-page\dots.png"></img>
          <img className="LandingLogin__dots2" src="src\pages\landing-page\dots.png"></img>
        </div>
      </section>

      <section className="LandingInfo">

        <div className="LandingInfo__half">
          <div className="LandingInfo__square1">
            <span className="fat_text">Czym jest?</span>Smart Campus
            <img className="logo_background" src="src\pages\landing-page\logo.svg"></img>
          </div>


          <div className="LandingInfo__square2">
            <img className="LandingLogin__dots3" src="src\pages\landing-page\dots.png"></img>
            <div className="LandingInfo__squareText1">
              <p>Projekt Koła Naukowego Informatyki</p>
              <p>Stosowanej</p>
            </div>
            <div className="LandingInfo__squareText2">
              <p>Smart Campus to platforma, która łączy wszystko, czego</p>
              <p>potrzebuje student - plan zajęć, mapę kampusu i aktualności -</p>
              <p>w jednym, intuicyjnym miejscu.</p>
            </div>
            <div className="LandingInfo__square2--bottom">
              <div className="LandingInfo__square2--bottomHalf">
                <p>Zespół Smart Campus:</p>
                <div className="LandingInfo__square2--bottomHalf2">
                  <FontAwesomeIcon icon={Icons.faUser} />
                  <FontAwesomeIcon icon={Icons.faUser} />
                  <FontAwesomeIcon icon={Icons.faUser} />
                </div>
              </div>
              <div className="LandingInfo__square2--bottomHalf">
                <p>Technologie:</p>
                <div className="LandingInfo__square2--bottomHalf2">
                  <MainButton className="LandingInfo__technologyTag" type="primary" text="React" onClick={() => window.open('https://react.dev/', '_blank')}/>
                  <MainButton className="LandingInfo__technologyTag" type="primary" text="Firebase" onClick={() => window.open('https://firebase.google.com/', '_blank')}/>
                </div>
                </div>
              </div>
            </div>
          </div>
        <div className="LandingInfo__half">
          <div className="LandingInfo__square3">
            <div className="LandingInfo__square-wrapper">
              <div><div className="LandingInfo__circleIcon"><FontAwesomeIcon icon={Icons.faCalendarDays} color="white" size="xl"/></div></div>
              <div className="LandingInfo__squareText3">Plan zajęć</div>
              <div className="LandingInfo__squareText2">
                <p>Wygodny, dynamiczny plan zajęć oraz</p>
                <p>czytelny terminarz zjazdów. Od teraz</p>
                <p>niczego nie przegapisz!</p>
              </div>
              <div className="LandingInfo__square-img"><img src="src\pages\landing-page\lekcja.png"></img></div>
            </div>
          </div>
          <div className="LandingInfo__square4"><img src="src\pages\landing-page\building2.png"></img></div>
          <div className="LandingInfo__square5">
            <div className="LandingInfo__square-wrapper">
              <div><div className="LandingInfo__circleIcon"><FontAwesomeIcon icon={Icons.faMap} color="white" size="xl"/></div></div>
              <div className="LandingInfo__squareText3">Mapa kampusu</div>
              <div className="LandingInfo__squareText2">
                <p>Łatwa, przejrzysta i wygodna, </p>
                <p>pomoże Ci poruszać się po kampusie</p>
                <p> oraz najbliżeszej okolicy.</p>
              </div>
              <div className="LandingInfo__square-img"><img src="src\pages\landing-page\map.png"></img></div>
            </div>
          </div>
        </div>
      </section>

      <section className="LandingNumbers">
        <div className="LandingNumbers--title"><p>Smart Campus w liczbach</p></div>
        <div className="LandingNumbers--bottom">

          <div className="LandingNumbers__block">
            <div className="LandingNumbers__block--top"><FontAwesomeIcon icon={Icons.faUser}/></div>
            <div className="LandingNumbers__block--bottom">
              <div className="LandingNumbers__blockBottomText1"><p>2</p></div>
              <div className="LandingNumbers__blockBottomText2"><p>Użytkowników platformy</p></div>
            </div>
          </div>

          <div className="LandingNumbers__block">
            <div className="nr_modules">
              <div className="LandingNumbers__block--bottom">
                <div className="LandingNumbers__blockBottomText1 LandingNumbers__modulesBlockTextAdjustment"><p>5</p></div>
                <div className="LandingNumbers__blockBottomText2 LandingNumbers__modulesBlockTextAdjustment"><p>Smart modułów</p></div>
              </div>
            </div>
            <div className="LandingNumbers__block--bottom LandingNumbers__block--Empety"></div>
          </div>

          <div className="LandingNumbers__block">
            <img className="LandingNumbers__block--top" src="src\pages\landing-page\building3.png"></img>
            <div className="LandingNumbers__block--bottom">
              <div className="LandingNumbers__blockBottomText1"><p>2</p></div>
              <div className="LandingNumbers__blockBottomText2"><p>Budynki objęte projektem</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="LandingFooter">
        <div className="LandingFooter__part1">
          <div className="LandingFooter_logo_part"><LogoFull colorReverse="reverse" /><p className="beta">BETA</p></div><p>Wersja 1.0</p>
        </div>
        <div className="LandingFooter__part2">
          <div><p>Skontaktuj się z nami po więcej</p><p>informacji.</p></div>
          <div className="LandingFooter__contact">
            <div>
              <p><span className="text_fat">Kontakt</span></p>
              <p><span className="text_underline">smartcampuspansim@gmail.com</span></p></div>
            <div>
              <p><span className="text_fat">Zgłoś błąd</span></p>
              <p>SmartCampusWeb.netlify.app/zglosblad</p>
            </div>
          </div>
        </div>
        <div className="LandingFooter__part3 LandingFooter__separator">
          <div>
            <p>KNIS 2025-2026 Wszelkie prawa zastrzeżone</p>
          </div>
          <div className="LandingFooter__part3--right">
            <p>Informacje o plikach cookie</p>
            <p>Polityka prywatności</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default LandingPage;