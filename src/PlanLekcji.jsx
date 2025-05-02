import { Link } from "react-router-dom";
import './PlanLekcji.css';
import React, { useState, useEffect, useRef } from 'react';

function PlanLekcji() {

  // Wybór kierunku
  const [Active1, setActive1] = useState(false);
  const kierunekRef = useRef(null);
  const expandListKierunek = () => {
    setActive1(prev => !prev);
  };

  // Wybór zjazdu
  const [Active2, setActive2] = useState(false);
  const zjazdRef = useRef(null);
  const expandListZjazd = () => { 
    setActive2(prev => !prev);
  };
  // Wybór miesiąca
  const [Active3, setActive3] = useState(false);
  const miesiacRef = useRef(null);
  const expandListMiesiac = () => {
    setActive3(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (kierunekRef.current && !kierunekRef.current.contains(event.target)) {
        setActive1(false);
      }
      if (zjazdRef.current && !zjazdRef.current.contains(event.target)) {
        setActive2(false);
      }
      if (miesiacRef.current && !miesiacRef.current.contains(event.target)) {
        setActive3(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const alercik = () => {
    alert('heuhue');
  };

  return (
    <app className="majes_plan_lekcji">
      <header>

        <section className="majes_header_choose__div">
          <p>Wyświetl plan dla:</p>
          <div className="majes_header_choose" onClick={expandListKierunek}>
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
          <div className="majes_header_choose" onClick={expandListZjazd}>
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
          <div className="majes_header_choose" onClick={expandListMiesiac}>
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