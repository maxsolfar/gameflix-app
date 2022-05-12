import React from 'react'

import styles from "./LandingAnimation.module.css";
import MenuRLanding from "../../molecules/MenuGLanding/MenuRLanding";
import MenuLLanding from "../../molecules/MenuGLanding/MenuLLanding";
import ButtonLanding from '../../molecules/BannerLanding/ButtonLanding';

import logo from "../../../assets/images/logoGameFlix.png";




function LandingAnimation() {
  return (
    <>
      
      <img src={logo} alt="title-img" className={styles.Logo}></img>

      <div className={styles.Background}>

        <div className={styles.Menu}>
          <MenuLLanding/>
          <MenuRLanding/>
        </div>
        
        <ButtonLanding/>
        

        <div className={styles.Bats}></div>
        <div className={styles.Atmosphere}></div>
        <div className={styles.Ground}></div>
        <div className={styles.CharacterB}></div>
        <div className={styles.Character}></div>
        <div className={styles.CharacterD}></div>
        <div className={styles.CharacterC}></div>
      </div>
    
      
      
    </>
    
  )
}

export default LandingAnimation