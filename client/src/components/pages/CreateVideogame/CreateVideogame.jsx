import React from 'react';

import styles from "./CreateVideogame.module.css";

import Navbar from "../../organisms/Navbar/Navbar";
import FormCreate from '../../organisms/FormCreate/FormCreate';

function CreateVideogame() {
  return (
    <>
      <Navbar/>
        <section className={styles.Container}>
          <div className={styles.TextContainer}>
            <h2 className={styles.Title}> Create your own <b>VIDEOGAME</b></h2>
            <span className={styles.Text}>¡Gain rewards using your game power!</span>
          </div>
          <FormCreate/>
        </section>
    </>
  )
}

export default CreateVideogame