import React from "react";
import styles from "./ButtonLanding.module.css";

import buttonStart from "../../../assets/images/button-start.png";
function ButtonLanding() {
  return (
    <>
      <a href="/">
        <img
          src={buttonStart}
          className={styles.ButtonLanding}
          alt="button-start"
        />
      </a>
    </>
  );
}

export default ButtonLanding;
