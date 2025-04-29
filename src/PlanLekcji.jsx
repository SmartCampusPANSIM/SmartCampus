import { Link } from "react-router-dom";
import './PlanLekcji.css';

function PlanLekcji() {
  return (
    <app className="majes_plan_lekcji">
      <header>
        <section className="majes_header_choose__div">
          <p>Wyświetl plan dla:</p>
          <div className="majes_header_choose">
          </div>
        </section>

        <section className="majes_header_choose__div">
          <p>Wybierz zjazd</p>
          <div className="majes_header_choose">
          </div>
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
