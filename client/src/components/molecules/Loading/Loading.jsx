import React from 'react';

import styles from "./Loading.module.css";

import loading from "../../../assets/images/loading.png";

function Loading() {
  return (
    <>
        <div className={styles.ContainerLoading}>
            <div className={styles.CharacterB}></div>
            <div className={styles.CharacterC}></div>
            <img src={loading} alt="loading-img" />
        </div>
    </>
  )
}

export default Loading