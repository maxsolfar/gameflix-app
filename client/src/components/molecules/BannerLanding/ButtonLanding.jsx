import React from "react";
import styles from "./ButtonLanding.module.css";

import { Link } from "react-router-dom";
import buttonStart from "../../../assets/images/button-start.png";
function ButtonLanding() {
  return (
    <>
      <Link to={"/games"}>
        <img
          src={buttonStart}
          className={styles.ButtonLanding}
          alt="button-start"
        />
      </Link>
    </>
  );
}

export default ButtonLanding;
