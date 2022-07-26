import React from "react";
import styles from "./BannerHome.module.css";

import char5 from "../../../assets/images/menu/characters/char5.png";
function BannerHome() {
  return (
    <>
      <header className={styles.BannerContainer}>
        <section className={styles.LeftHeader}>
     
        </section>

        <section className={styles.RightHeader}>
          <h2 className={styles.Title}><b>|</b> The Witcher 3</h2>
          
          <h3 className={styles.Subtitle}>Game of the Week</h3>
          <span className={styles.Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est
            quia ea, repellendus reiciendis facere consectetu?
          </span>
          <img src={char5} alt="" className={styles.Character}/> 
        </section>
      </header>
    </>
  );
}

export default BannerHome;
