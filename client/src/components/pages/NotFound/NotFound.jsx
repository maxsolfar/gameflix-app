import React from 'react';

import styles from "./NotFound.module.css";

import Navbar from "../../organisms/Navbar/Navbar";


function NotFound() {
  return (
    <>
      <Navbar/>
      <section className={styles.Container}>
        <h2 className={styles.Title}><b>Oops,</b> page not found</h2>
        <div className={styles.NotFoundImg}></div>
        <span className={styles.SubTitle}>This page you requested could not be found.</span>
      </section>
    </>
  )
}

export default NotFound;