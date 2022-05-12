import React from "react";

import styles from "./MenuRLanding.module.css";

function menuRLanding() {
  return (
    <div className={styles.settings}>
      <i className={styles.settingsItemA}></i>
      <i className={styles.settingsItemB}></i>
      <i className={styles.settingsItemC}></i>
      <i className={styles.settingsItemD}></i>
      <i className={styles.settingsItemE}></i>
    </div>
  );
}

export default menuRLanding;
