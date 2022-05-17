import React from 'react';
import styles from "./MenuLLanding.module.css";

import lifePointsA from "../../../assets/images/settings/lifepointsA.png";
import lifePointsB from "../../../assets/images/settings/lifepointsB.png";

function MenuLLanding() {
  return (
    <div className={styles.lifePoints}>
      <img src={lifePointsA} className={styles.lifePointsA} alt="" />
      <img src={lifePointsB} className={styles.lifePointsB} alt="" />
    </div>
  )
}

export default MenuLLanding;