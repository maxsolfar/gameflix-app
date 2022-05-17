import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllGenres, getAllVideogames, GET_GENRES } from "../../../actions/actions";
import Card from "../../molecules/Card/Card";
import Navbar from "../../organisms/Navbar/Navbar";
import Pagination from "../../organisms/Pagination/Pagination";

import styles from "./Home.module.css";
import controllerIcon from "../../../assets/images/menu/icon-featured.png";

function Home() {
  const dispatch = useDispatch();
  const { games, genres } = useSelector((store) => store);

  /*
  * Pagination
  */
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ gamesPerPage ] = useState(12);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);


  /*Get Games and Genres*/
  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
  }, [dispatch]);

  return (
    <>
      {console.log(games, genres)}
      <Navbar/>
      <div className={styles.Container}>
        <h1 className={styles.Title}>
          <img src={controllerIcon} alt="controller-icon" />
          All <b>Featured</b> Games
        </h1>
        {!currentGames && <h1 className={styles.Loader}>Cargando</h1>}
        <div className={styles.GridContainer}>
          {currentGames &&
            currentGames.map((game) => (
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
  );
}

export default Home;
