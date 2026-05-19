import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDog } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import * as Icons from '@icons/icons'
import logo from '@icons/PansimWydzialInz_flat_transparent.png'

function Panel() {
  return (
    <div className=""   style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  }}>
      <img src={logo} alt="logo" />
      <h1>Witaj w Smart Campus!</h1>
    </div>
  );
}

export default Panel;
