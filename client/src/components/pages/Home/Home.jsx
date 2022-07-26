import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllGenres, getAllVideogames, getPage } from "../../../actions/actions";
import Card from "../../molecules/Card/Card";
import Navbar from "../../organisms/Navbar/Navbar";
import Pagination from "../../organisms/Pagination/Pagination";

import styles from "./Home.module.css";
import controllerIcon from "../../../assets/images/menu/icon-featured.png";

import Loading from "../../molecules/Loading/Loading";

import EmptyGames from "../../molecules/EmptyGames/EmptyGames";

function Home() {
  const dispatch = useDispatch();
  const { allgames, games, savedPage } = useSelector((store) => store);

  /*
   * Pagination
   */
  const [currentPage, setCurrentPage] = useState(savedPage);
  const [gamesPerPage] = useState(12);

  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  /*Get Games and Genres*/
  useEffect(() => {
    if(games.length === 0){
      dispatch(getAllVideogames());
      dispatch(getAllGenres());
      dispatch(getPage(1));
    }
  }, [dispatch]);


  return (
    <>
      <Navbar page={"home"} paginate={paginate} />
      {(allgames.length === 0 ? <Loading />
      : games.length === 0 && <EmptyGames/>)}
      {games.length > 0 &&
        <>
          <div className={styles.Container}>
            <h1 className={styles.Title}>
              <img src={controllerIcon} alt="controller-icon" />
              All <b>Featured</b> Games
            </h1>
            <div className={styles.GridContainer}>
              {currentGames && 
                currentGames?.map((game) => (
                  <Card
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    released={game.released}
                    rating={game.rating}
                    platforms={game.platforms}
                    img={game.background_image}
                    genres={game.genres}
                  />
                ))}
            </div>
            <Pagination
              gamesPerPage={gamesPerPage}
              totalGames={games.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </>
      }
    </>
  );
}

export default Home;
