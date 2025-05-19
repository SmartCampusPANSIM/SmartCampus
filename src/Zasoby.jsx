import React from "react";
import "./Zasoby.css";
import figmaLogo from "./zdj/figma.png";
import githubLogo from "./zdj/github.png";
import trelloLogo from "./zdj/trello.png";
import googleLogo from "./zdj/google.png";

const zasobyData = [
  {
    className: "container1",
    logo: figmaLogo,
    alt: "Figma",
    title: "Figma-dokumentacja graficzna",
    link: "https://www.figma.com/design/8WrbJ7Ym8VygAjB4mVomj7/Projekt-graficzny?node-id=0-1&p=f&t=yW52y2lyyeYSqUW1-0",
    linkText: "https://www.figma.com/design/8WrbJ7Ym8VygAjB4mVomj7/Projekt-graficzny?node-id=0-1&p=f&t=yW52y2lyyeYSqUW1-0",
    linkClass: "link"
  },
  {
    className: "container2",
    logo: githubLogo,
    alt: "Github",
    title: "Github",
    link: "https://github.com/SmartCampusPANSIM/SmartCampus",
    linkText: "https://github.com/SmartCampusPANSIM/SmartCampus",
    linkClass: "link2"
  },
  {
    className: "container3",
    logo: trelloLogo,
    alt: "Trello",
    title: "Trello",
    link: "https://trello.com/w/przestrzenroboczauser59809144/home",
    linkText: "https://trello.com/w/przestrzenroboczauser59809144/home",
    linkClass: "link"
  },
  {
    className: "container4",
    logo: googleLogo,
    alt: "Google Sheets",
    title: "Arkusz Googla",
    link: "https://docs.google.com/spreadsheets/d/1CybHvjDJpgnaOD-DiUIWtGUwSgaq83KvPEiEjbSz_4Q/edit?gid=0#gid=0",
    linkText: "https://docs.google.com/spreadsheets/d/1CybHvjDJpgnaOD-DiUIWtGUwSgaq83KvPEiEjbSz_4Q/edit?gid=0#gid=0",
    linkClass: "link"
  }
];

const Zasoby = () => {
  const handleContainerClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="tytul1">Zasoby</div>
      </div>
      {zasobyData.map((item, idx) => (
        <div
          key={idx}
          className={item.className}
          onClick={() => handleContainerClick(item.link)}
          style={{ cursor: "pointer" }}
        >
          <div className={`row${idx + 1}`}>
            <img src={item.logo} alt={item.alt} />
            <div>
              <div className="tytul">{item.title}</div>
              <span className={item.linkClass}>{item.linkText}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Zasoby;