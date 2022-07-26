import React from 'react';

import styles from "./EmptyGames.module.css";

import imgFound from "../../../assets/images/game-not-found.png"
import { useDispatch } from 'react-redux';

import {dataFromAll} from "../../../actions/actions";

function EmptyGames() {

  const dispatch = useDispatch();

  function refreshPage(){
    dispatch(dataFromAll());
  }

  return (
    <>  
        <section className={styles.Container}>
            <h2 className={styles.Title}>No Videogames found</h2>
            <img className={styles.Img} src={imgFound} alt="img-not-found-games" />
            <button className={styles.ButtonRefresh} onClick={refreshPage}>Reload Page</button>
        </section>
        
    </>
  )
}

export default EmptyGames;