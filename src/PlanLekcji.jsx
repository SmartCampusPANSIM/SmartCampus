import { Link } from "react-router-dom";
import './PlanLekcji.css';
import React, { useState, useEffect, useRef } from 'react';

function PlanLekcji() {

  // Wybór kierunku
  const [isActive1, setIsActive1] = useState(false);
  const kierunekRef = useRef(null);
  const expandListKierunek = () => {
    setIsActive1(prev => !prev);
  };

  // Wybór zjazdu
  const [isActive2, setIsActive2] = useState(false);
  const zjazdRef = useRef(null);
  const expandListZjazd = () => {
    setIsActive2(prev => !prev);
  };
  // Wybór miesiąca
  const [isActive3, setIsActive3] = useState(false);
  const miesiacRef = useRef(null);
  const expandListMiesiac = () => {
    setIsActive3(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (kierunekRef.current && !kierunekRef.current.contains(event.target)) {
        setIsActive1(false);
      }
      if (zjazdRef.current && !zjazdRef.current.contains(event.target)) {
        setIsActive2(false);
      }
      if (miesiacRef.current && !miesiacRef.current.contains(event.target)) {
        setIsActive3(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <app className="majes_plan_lekcji">
      <header>

        <section className="majes_header_choose__div">
          <p>Wyświetl plan dla:</p>
          <div className="majes_header_choose" onClick={expandListKierunek} ref={kierunekRef}>
          </div>
          {isActive1 && (
          <div className="majes_header_list__div">
          </div>
          )}
        </section>


        <section className="majes_header_choose__div">
          <p>Wybierz zjazd</p>
          <div className="majes_header_choose" onClick={expandListZjazd} ref={zjazdRef}>
          </div>
          {isActive2 && (
          <div className="majes_header_list__div">
          </div>
          )}
        </section>

        <section className="majes_header_choose__div">
          <p>Wybierz miesiąc</p>
          <div className="majes_header_choose" onClick={expandListMiesiac} ref={miesiacRef}>
          </div>
          {isActive3 && (
          <div className="majes_header_list__div">
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