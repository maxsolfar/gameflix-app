import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Card.module.css";

function Card({id,name, released, rating, platforms, genres, img}) {
  return (
    <>
      <section className={styles.CardContainer}>
        <div className={styles.TopCard}>
          <div className={styles.GenresContainer}>
            { genres && genres.map((genre, index) => (
                genre.hasOwnProperty("name")
                ? <p key={index} className={styles.Genre}>{genre.name}</p> 
                : <p key={index} className={styles.Genre}>{genre}</p> 
              ))
            }
          </div>
          <div className={styles.Overlay}></div>
          <img className={styles.ImageGame} src={img} alt="img-game" />
          
        </div>
        <Link to={`/game/${id}`}>
          <h3 className={styles.TitleGame}>{name}</h3>   
        </Link>      
        <div className={styles.BottomCard}>
          <div className={styles.BottomInfo}>
            <span className={styles.Released}>{released}</span>
            <span className={styles.RatingGame}><i className={styles.IconRating}></i>{rating}</span>
          </div>
          
          <div className={styles.PlatformsContainer}>

            { platforms && platforms.map((platform, index) => (
                platform.hasOwnProperty("name") 
                ? index < 3 && <p key={index} className={styles.Platform}>{platform.name}</p> 
                : index < 3 && <p key={index} className={styles.Platform}>{platform}</p> 
              ))
            }
          </div>
          
        </div>
        
        
      </section>
    </>
  )
}


export default Card