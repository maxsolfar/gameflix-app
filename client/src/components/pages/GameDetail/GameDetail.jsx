import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./GameDetail.module.css";

import { getVideogameDetail } from "../../../actions/actions";
import Loading from "../../molecules/Loading/Loading";
import Navbar from "../../organisms/Navbar/Navbar";



function GameDetail() {
  const dispatch = useDispatch();
  
  const gameDetail = useSelector((state) => state.gameDetail);
  const { idVideogame } = useParams();

  useEffect(() => {
    dispatch(getVideogameDetail(idVideogame));
    return () => {dispatch(getVideogameDetail());};
  }, [dispatch, idVideogame]);

  return (
    <>
        <Navbar/>
      {gameDetail.id === undefined ? 
        <div className={styles.LoadingContainer}>
          <Loading />
        </div>
        
       : (
        <div className={styles.DetailContainer}>

          <div className={styles.BackSection}>
            <img className={styles.BackImg} src={gameDetail.background_image_additional} alt="img-game2" />
            <div className={styles.Overlay}></div>
          </div>

          <section className={styles.InsideSection} >

              <div className={styles.Left}>
                <div className={styles.TopGame}>
                  <h2 className={styles.GameTitle}>{gameDetail.name}</h2>
                  <a href={gameDetail.website} target="_blank" rel="noreferrer" className={styles.WebsiteGame}><i className={styles.IconWebsite}></i>{gameDetail.website}</a>
                </div>
                <img className={styles.GameImg} src={gameDetail.background_image} alt="img-game" />
                <div className={styles.Info}>
                  <span className={styles.GameReleased}><b>Release Date:  </b>{gameDetail.released}</span>
                  <span className={styles.RatingGame}><i className={styles.IconRating}></i>{gameDetail.rating}</span>
                </div>
                
                <div className={styles.Genres}>
                  <h2>Genres:</h2>
                  {gameDetail.genres?.map((genre, index) =>
                    genre.hasOwnProperty("name") ? <p className={styles.Genre} key={index}>{genre.name}</p> : <p className={styles.Genre} key={index}>{genre}</p>
                  )}
                </div>
              </div>
              
              <div className={styles.Right}>
                <section>
                  <p className={styles.SubTitles}>Description:</p>
                  <p className={styles.GameDescription}>{gameDetail.description}</p> 
                </section>

                <section className={styles.PlatformContainer} > 

                  <p className={styles.PlatformTitle}><i className={styles.IconPlatform}></i> Platforms:</p>

                  <div className={styles.Platforms}>
                  {gameDetail.platforms?.map((platform, index) => (
                  platform.hasOwnProperty("name") 
                  ? <p key={index} className={styles.Platform}>{platform.name}</p> 
                  : <p key={index} className={styles.Platform}>{platform}</p> 
                  ))
                  }
                  </div>
                </section>

                <section className={styles.Stores}>
                  <div className={styles.LeftStore}>
                    <p>Stores:</p>
                  </div>
                  <div className={styles.RightStore}>
                    {gameDetail.stores?.map((store, index) =>
                      store.hasOwnProperty("name") ?
                      <p className={styles.Store} key={index}>
                        <i className={store.name === "Steam" ? styles.IconSteam
                        : store.name === "Xbox Store" ? styles.IconXbox
                        : store.name === "PlayStation Store" ? styles.IconPS
                        : store.name === "App Store" ? styles.IconApp
                        : store.name === "GOG" ? styles.IconGOG
                        : store.name === "Nintendo Store" ? styles.IconNintendo
                        : store.name === "Xbox 360 Store" ? styles.Icon360
                        : store.name === "Google Play" ? styles.IconPlay
                        : store.name === "itch.io" ? styles.IconItchio
                        : styles.IconEpic 
                        
                      }></i>{store.domain}</p>
                      : <p className={styles.Store} key={index}>{store}</p>
                    )}
                  </div>
                  
                </section>    
                
                <section>
                  <div className={styles.TagTitle}>
                      <p>Tags:</p>
                  </div>

                  <div className={styles.Tags}>
                  {gameDetail.tags?.map((tag, index) =>
                      tag.hasOwnProperty("name") ? <p className={styles.Tag} key={index}>{tag.name}</p> : <p className={styles.Tag} key={index}>{tag}</p>
                    )}
                  </div>

                    
                </section>

                

              </div>

          
            </section>
          


        </div>
      )}

    </>
  );
}

export default GameDetail;
