import React from 'react';
import "./PlanLekcji.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@icons/icons';
const Lekcja = ({ text }) => {

  return (
    <div className="lesson">

        <div className="lesson_name">
        <p>Matlab</p>
        <p>ćwiczenia</p>
        </div>

        <div className="lesson_timeLeft">
        {/* <img src="./src/assets/hourglass-blue.svg"></img> */}
        <p>00:59:00</p>
        </div>

        <div className="lesson_teacher">
        {/* <img src="./src/assets/student-blue.svg"></img> */}
        <p>Dr. Imię Nazwisko</p>
        </div>

        <div className="lesson_room">
        {/* <img src="./src/assets/doors-blue.svg"></img> */}
        <p>Budynek</p>
        {/* <img src="./src/assets/dot-blue.svg"></img> */}
        <p>202A</p>
        </div>

        <div className="lesson_hour">
        {/* <img src="./src/assets/clock-blue.svg"></img> */}
        <p>10:00</p>
        {/* <img src="./src/assets/arrowRightFull-blue.svg"></img> */}
        <p>11:30</p>
        </div>
    </div>
  );
}
export default Lekcja;