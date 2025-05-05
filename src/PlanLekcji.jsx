import React from "react";
import "./PlanLekcji.css"; 

const Zjazd1 = () => {
  return (
    <div className="zjazd">
      <div className="miesiąc">Marzec</div>
      <div className="zjazd-container">
        <div className="row">
          <div className="zjazd-tytul">Zjazd 1</div>
          <div className="zjazd-rok">Semestr Letni 2025</div>
        </div>

        <div className="daty">
          <div className="zjazd-daty">25 marca Piątek</div>
          <div className="zjazd-daty1">26 marca Sobota</div>
          <div className="zjazd-daty2">27 marca Niedziela</div>
        </div>
      </div>

      <div className="miesiąc">Kwiecień</div>
      <div className="zjazd-container2">
        <div className="row">
          <div className="zjazd-tytul">Zjazd 2</div>
          <div className="zjazd-rok">Semestr Letni 2025</div>
          <div className="zjazd-za">Zjazd za 13 dni</div>
        </div>

        <div className="daty">
          <div className="zjazd-daty">15 kwietnia Piątek</div>
          <div className="zjazd-daty1">16 kwietnia Sobota</div>
          <div className="zjazd-daty2">17 kwietnia Niedziela</div>
        </div>
      </div>

      <div className="zjazd-container3">
        <div className="row">
          <div className="zjazd-tytul">Zjazd 3</div>
          <div className="zjazd-rok">Semestr Letni 2025</div>
        </div>

        <div className="daty">
          <div className="zjazd-daty">29 kwietnia Piątek</div>
          <div className="zjazd-daty1">30 kwietnia Sobota</div>
          <div className="zjazd-daty2">1 maja Niedziela</div>
        </div>
      </div>

      <div className="miesiąc">Maj</div>
      <div className="zjazd-container4">
        <div className="row">
          <div className="zjazd-tytul">Zjazd 4</div>
          <div className="zjazd-rok">Semestr Letni 2025</div>
        </div>

        <div className="daty">
          <div className="zjazd-daty">13 maja Piątek</div>
          <div className="zjazd-daty1">14 maja Sobota</div>
          <div className="zjazd-daty2">15 maja Niedziela</div>
        </div>
      </div>

      <div className="zjazd-container5">
        <div className="row">
          <div className="zjazd-tytul">Zjazd 5</div>
          <div className="zjazd-rok">Semestr Letni 2025</div>
        </div>

        <div className="daty">
          <div className="zjazd-daty">27 maja Piątek</div>
          <div className="zjazd-daty1">28 maja Sobota</div>
          <div className="zjazd-daty2">29 maja Niedziela</div>
        </div>
      </div>
    </div>
  );
};

export default Zjazd1;