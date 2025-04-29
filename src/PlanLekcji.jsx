import { Link } from "react-router-dom";
import './PlanLekcji.css';
import React, { useState } from 'react';

function PlanLekcji() {

    const [isActive1, setIsActive1] = useState(false);
    const expandListKierunek = () => {
      setIsActive1(prev => !prev);
    }

    const [isActive2, setIsActive2] = useState(false);
    const expandListCos = () => {
      setIsActive2(prev => !prev);
    }
  return (
    <app className="majes_plan_lekcji">
      <header>

        <section className="majes_header_choose__div">
          <p>Wyświetl plan dla:</p>
          <div className="majes_header_choose" onClick={expandListKierunek}>
          </div>
          {isActive1 && (
          <div className="majes_header_list__div">
          </div>
          )}
        </section>


        <section className="majes_header_choose__div">
          <p>Wybierz zjazd</p>
          <div className="majes_header_choose" onClick={expandListCos}>
          </div>
          {isActive2 && (
          <div className="majes_header_list__div">
          </div>
          )}
        </section>

        <section className="majes_header_choose__div">
          <p>Wybierz miesiąc</p>
          <div className="majes_header_choose">
          </div>
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