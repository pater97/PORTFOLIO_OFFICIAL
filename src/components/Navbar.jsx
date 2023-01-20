import React, { useState } from "react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";

const LOGO = require("../assets/logo_w.png");

function Navbar() {
  const [ACTIVECLASS, setActive] = useState(1);
  let navigate = useNavigate();


  const goTo = (params) => () => {
    setActive(params);
    if(params ===1){
        navigate('/')
    } else if(params === 2){
        navigate('/about')
    } else if(params === 3){
        navigate('/projects')
    } else {
        navigate('contact')
    }
  };

  return (
    <navbar id="navbar" className="mx-auto container">
      <div className="navigation">
        <div className="choicheBox">
          <h3
            onClick={goTo(1)}
            className={`${ACTIVECLASS === 1 ? "active" : ""}`}
          >
            HOME
          </h3>
          <div className={`linehover ${ACTIVECLASS === 1 ? "activeLineHover" : ""}`}></div>
        </div>
        <div className="choicheBox">
          <h3
            onClick={goTo(2)}
            className={`${ACTIVECLASS === 2 ? "active" : ""}`}
          >
            ABOUT
          </h3>
          <div className={`linehover ${ACTIVECLASS === 2 ? "activeLineHover" : ""}`}></div>
        </div>
        <div className="choicheBox">
          <h3
            onClick={goTo(3)}
            className={`${ACTIVECLASS === 3 ? "active" : ""}`}
          >
            PROJECTS
          </h3>
          <div className={`linehover ${ACTIVECLASS === 3 ? "activeLineHover" : ""}`}></div>
        </div>
      </div>
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>
      <div className="contact">
        <Button
          label="CONTATTAMI"
          buttonColor={"brand"}
          clickButton={goTo(0)}
        />
      </div>
    </navbar>
  );
}

export default Navbar;
