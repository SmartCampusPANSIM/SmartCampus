import { Link } from "react-router-dom";
import './PlanLekcji.css';
import React, { useState, useEffect, useRef } from 'react';
import List from '@components/Lista/Lista';
import Lekcja from "./Lekcja";

function PlanLekcji() {

  // Scrollowanie w bok
  const scrollSideRef = useRef(null)
  useEffect(() => {

    const scroll = scrollSideRef.current;
    if (!scroll) return;

      const onWheel = (event) => {
        event.preventDefault();
        if (event.deltaY === 0) return;
        scroll.scrollLeft += event.deltaY * 0.3;
      };

      scroll.addEventListener("wheel", onWheel, { passive: false });

      return () => scroll.removeEventListener("wheel", onWheel);
    }, []);

  return (
    <div className="planLekcji">
      <header>

        {/* Wybór kierunku */}
        <section className="header_choice__div">
          <p>Wybierz kierunek</p>
          <List
            listButtonTop="Informatyka NS"
            listButtonBot="2 Rok IV Semestr"
            choices={[
              { label: 'Informatyka ST', value: '' },
              { label: 'Informatyka NS', value: '' },
            ]}
            onSelect={(option) => console.log(option)}
          />
        </section>

        {/* Wybór zjazdu */}
        <section className="header_choice__div">
          <p>Wybierz zjazd</p>
          <List
            listButtonTop="Informatyka NS"
            listButtonBot="Zjazd 3"
            choices={[
              { label: 'Zjazd 1', value: '' },
              { label: 'Zjazd 2', value: '' },
              { label: 'Zjazd 3', value: '' },
              { label: 'Zjazd 4', value: '' },
            ]}
            onSelect={(option) => console.log(option)}
          />
        </section>

        {/* Wbór miesiąca */}
        <section className="header_choice__div">
          <p>Wybierz miesiąc</p>
          <List
            listButtonTop="2025"
            listButtonBot="Kwiecień"
            choices={[
              { label: 'Maj', value: '' },
              { label: 'Czerwiec', value: '' },
              { label: 'Lipiec', value: '' },
              { label: 'Sierpień', value: '' },
              { label: 'Wrzesień', value: '' },
              { label: 'Październik', value: '' },
              { label: 'Listopad', value: '' },
              { label: 'Grudzień', value: '' },
            ]}
            onSelect={(option) => console.log(option)}
          />
        </section>

        <section className="header_dayChoice_container">
          <p>Wybierz dzień</p>
          <div className="header_dayChoice_main">
            <img src="./src/assets/arrowLeft-blue.svg"></img>
            <section className="header_dayChoice_days" ref={scrollSideRef}>
              <div className="header_dayChoice"> <p>1D.tyg</p> <p>XX msc</p> </div>
            </section>
            <img src="./src/assets/arrowRight-blue.svg"></img>
          </div>
        </section>

      </header>

      <main>
        <section className="main_top">
          <p>Zajęcia w dniu [data]</p>
        </section>
        <section className="main">

          {/* BLok lekcji */}
            <Lekcja></Lekcja>
          {/* Koniec bloku lekcji */}

        </section>
      </main>





    </div>
  );
}

export default PlanLekcji;