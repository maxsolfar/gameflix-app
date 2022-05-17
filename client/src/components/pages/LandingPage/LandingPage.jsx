import React from "react";
import LandingAnimation from "../../organisms/LandingAnimation/LandingAnimation";

import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={styles.Background}>

        <LandingAnimation />

      </div>
    </>
  );
}

export default LandingPage