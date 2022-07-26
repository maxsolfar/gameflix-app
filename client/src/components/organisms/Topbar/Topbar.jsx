import React from 'react';

import styles from "./Topbar.module.css";
import home from "../../../assets/svg/icons/icon-home.png";

import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  function backHome() {
    navigate("/games");
  }

  return (
    <nav className={styles.Topbar}>
              <button onClick={backHome} className={styles.Container}>
                <img src={home} className={styles.Logo} alt="icon-back-to-home" />
                <span className={styles.Text}>Back to Home</span> 
              </button>
          
    </nav>
  )
}

export default Topbar