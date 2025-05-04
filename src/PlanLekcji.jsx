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


  // Scrollowanie w bok
  const scrollSideRef = useRef(null)
  useEffect(() => {

    const scroll = scrollSideRef.current;
    if (!scroll) return;

      const onWheel = (event) => {
        event.preventDefault();
        if (event.deltaY === 0) return;
        scroll.scrollLeft += event.deltaY * 0.1;
      };

      scroll.addEventListener("wheel", onWheel, { passive: false });

      return () => scroll.removeEventListener("wheel", onWheel);
    }, []);

  const alercik = () => {
    alert('heuhue');
  };

  return (
    <app className="majes_plan_lekcji">
      <header>

        {/* Wybór kierunku */}
        <section className="majes_header_choose__div">
          <p>Wyświetl plan dla:</p>
          <div className="majes_header_choose" onClick={() => setActive1(prev => !prev)} ref={kierunekButtonRef}>
            <div className="majes_header_choose-chosen">
            <p>Informatyka NS</p>
            </div>
            <img src="./src/assets/arrow_down-white.svg"></img>
          </div>
          
          {Active1 && (
          <div className="majes_header_list" ref={kierunekRef}>
            <div className="majes_choice" onClick={alercik}>Informatyka ST</div>
            <div className="majes_choice">Informatyka NS</div>
          </div>
          )}
        </section>

        {/* Wybór zjazdu */}
        <section className="majes_header_choose__div">
          <p>Wybierz zjazd</p>
          <div className="majes_header_choose" onClick={() => setActive2(prev => !prev)} ref={zjazdButtonRef}>
          <div className="majes_header_choose-chosen">
            <p>Zjazd 1</p>
          </div>
          <img src="./src/assets/arrow_down-white.svg"></img>
          </div>

          {Active2 && (
          <div className="majes_header_list" ref={zjazdRef}>
            <div className="majes_choice" onClick={alercik}>Zjazd 1</div>
            <div className="majes_choice">Zjazd 2</div>
            <div className="majes_choice">Zjazd 3</div>
          </div>
          )}
        </section>

        {/* Wbór miesiąca */}
        <section className="majes_header_choose__div">
          <p>Wybierz miesiąc</p>
          <div className="majes_header_choose" onClick={() => setActive3(prev => !prev)} ref={miesiacButtonRef}>
          <div className="majes_header_choose-chosen">
            <p>Marzec</p>
          </div>
          <img src="./src/assets/arrow_down-white.svg"></img>
          </div>
          {Active3 && (

          <div className="majes_header_list" ref={miesiacRef}>
            <div className="majes_choice" onClick={alercik}>Marzec</div>
            <div className="majes_choice">Kwiecień</div>
            <div className="majes_choice">Maj</div>
            <div className="majes_choice">Czerwiec</div>
            <div className="majes_choice">Lipiec</div>
            <div className="majes_choice">Sierpień</div>
            <div className="majes_choice">Wrzesień</div>
            <div className="majes_choice">Październik</div>
            <div className="majes_choice">Listopad</div>
          </div>
          )}
          
        </section>

        <section className="majes_header_choose_day__div">
          <p>Wybierz dzień</p>
          <div className="majes_header_choose_day__bottom">
            <img src="./src/assets/arrowLeft-blue.svg"></img>
            <section className="majes_header_choose_day__days" ref={scrollSideRef}>
              <div className="majes_header_choose_day"> <p>1D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>2D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>3D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>4D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>5D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>D.tyg</p> <p>XX msc</p> </div>
              <div className="majes_header_choose_day"> <p>D.tyg</p> <p>XX msc</p> </div>
            </section>
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