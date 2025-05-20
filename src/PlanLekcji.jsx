import { Link } from "react-router-dom";
import './PlanLekcji.css';
import React, { useState, useEffect, useRef } from 'react';
import List from './Lista';

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
    <app className="majes_plan_lekcji">
      <header>

        {/* Wybór kierunku */}
        <section className="majes_header_choose__div">
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
        <section className="majes_header_choose__div">
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
        <section className="majes_header_choose__div">
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

      <main>
        <section className="majes_main_top">
          <p>Zajęcia w dniu [data]</p>
        </section>
        <section className="majes_main">

          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          {/* BLok lekcji */}
          <div className="majes_lesson__block">

            <div className="majes_lesson_name">
              <p>Matlab</p>
              <p>ćwiczenia</p>
            </div>

            <div className="majes_lesson_timeleft">
            <img src="./src/assets/hourglass-blue.svg"></img>
              <p>00:59:00</p>
            </div>

            <div className="majes_lesson_teacher">
            <img src="./src/assets/student-blue.svg"></img>
              <p>Dr. Imię Nazwisko</p>
            </div>

            <div className="majes_lesson_place">
            <img src="./src/assets/doors-blue.svg"></img>
              <p>Budynek</p>
              <img src="./src/assets/dot-blue.svg"></img>
              <p>202A</p>
            </div>

            <div className="majes_lesson_hour">
              <img src="./src/assets/clock-blue.svg"></img>
              <p>10:00</p>
              <img src="./src/assets/arrowRightFull-blue.svg"></img>
              <p>11:30</p>
            </div>
          </div>
          {/* Koniec bloku lekcji */}
          
        </section>
      </main>





    </app>
  );
}

export default PlanLekcji;