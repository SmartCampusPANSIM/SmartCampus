import { Link } from "react-router-dom";
import './PlanLekcji.css';
import React, { useState, useEffect, useRef } from 'react';

function PlanLekcji() {

  // Wybór kierunku
  const [Active1, setActive1] = useState(false);
  const kierunekRef = useRef(null);
  const kierunekButtonRef = useRef(null);

  // Wybór zjazdu
  const [Active2, setActive2] = useState(false);
  const zjazdRef = useRef(null);
  const zjazdButtonRef = useRef(null);

  // Wybór miesiąca
  const [Active3, setActive3] = useState(false);
  const miesiacRef = useRef(null);
  const miesiacButtonRef = useRef(null);

// Znikanie listy przy kliknięciu poza nią
  useEffect(() => {
    function clickOutside(event) {
      // Dla kierunku
      const outsideKierunekList = kierunekRef.current && !kierunekRef.current.contains(event.target);
      const outsideKierunekButton = kierunekButtonRef.current && !kierunekButtonRef.current.contains(event.target);
      if (Active1 && outsideKierunekList && outsideKierunekButton) {
        setActive1(false);
      }
      //  Dla zjazdu
      const outsideZjazdList = zjazdRef.current && !zjazdRef.current.contains(event.target);
      const outsideZjazdButton = zjazdButtonRef.current && !zjazdButtonRef.current.contains(event.target);
      if (Active2 && outsideZjazdList && outsideZjazdButton) {
        setActive2(false);
      }
      // Dla miesiąca
      const outsideMiesiacList = miesiacRef.current && !miesiacRef.current.contains(event.target);
      const outsideMiesiacButton = miesiacButtonRef.current && !miesiacButtonRef.current.contains(event.target);
      if (Active3 && outsideMiesiacList && outsideMiesiacButton) {
        setActive3(false);
      }
    }

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [Active1, Active2, Active3]);


  const alercik = () => {
    alert('heuhue');
  };

  return (
    <app className="majes_plan_lekcji">
      <header>

        <section className="majes_header_choose__div">
          <p>Wyświetl plan dla:</p>
          <div className="majes_header_choose" onClick={() => setActive1(prev => !prev)} ref={kierunekButtonRef}>
            <div className="majes_header_choose-info"></div>
            <img src="./src/assets/arrow_down-white.svg"></img>
          </div>
          {Active1 && (
          <div className="majes_header_list__div" ref={kierunekRef}>
            <div className="majes_choice" onClick={alercik}>Zjazd 1</div>
            <div className="majes_choice">Zjazd 2</div>
            <div className="majes_choice">Zjazd 3</div>
          </div>
          )}
        </section>


        <section className="majes_header_choose__div">
          <p>Wybierz zjazd</p>
          <div className="majes_header_choose" onClick={() => setActive2(prev => !prev)} ref={zjazdButtonRef}>
          <div className="majes_header_choose-info"></div>
          <img src="./src/assets/arrow_down-white.svg"></img>
          </div>
          {Active2 && (
          <div className="majes_header_list__div" ref={zjazdRef}>
            <div className="majes_choice" onClick={alercik}>Zjazd 1</div>
            <div className="majes_choice">Zjazd 2</div>
            <div className="majes_choice">Zjazd 3</div>
          </div>
          )}
        </section>

        <section className="majes_header_choose__div">
          <p>Wybierz miesiąc</p>
          <div className="majes_header_choose" onClick={() => setActive3(prev => !prev)} ref={miesiacButtonRef}>
          <div className="majes_header_choose-info"></div>
          <img src="./src/assets/arrow_down-white.svg"></img>
          </div>
          {Active3 && (
          <div className="majes_header_list__div" ref={miesiacRef}>
            <div className="majes_choice" onClick={alercik}>Zjazd 1</div>
            <div className="majes_choice">Zjazd 2</div>
            <div className="majes_choice">Zjazd 3</div>
          </div>
          )}
          
        </section>

        <section className="majes_header_choose_day__div">
          <p>Wybierz dzień</p>
          <div className="majes_header_choose_day__days">
            <img src="./src/assets/arrowLeft-blue.svg"></img>
            <div className="majes_header_choose_day"></div>
            <div className="majes_header_choose_day"></div>
            <div className="majes_header_choose_day"></div>
            <div className="majes_header_choose_day"></div>
            <div className="majes_header_choose_day"></div>
            <div className="majes_header_choose_day"></div>
            <div className="majes_header_choose_day"></div>
            <img src="./src/assets/arrowRight-blue.svg"></img>
          </div>
        </section>

      </header>

      <main class="majes_main">
        <section className="majes_main_top">
        <p>Zajęcia w dniu [data]</p>
        </section>
        <section className="majes_main_bottom">

        </section>
      </main>
    </app>
  );
}

export default PlanLekcji;