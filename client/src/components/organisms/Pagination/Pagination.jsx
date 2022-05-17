import React from "react";
import styles from "./Pagination.module.css";

import previousIcon from "../../../assets/svg/icons/prev-active.png";
import previousIconD from "../../../assets/svg/icons/prev-disabled.png";
import nextIcon from "../../../assets/svg/icons/next-active.png";
import nextIconD from "../../../assets/svg/icons/next-disabled.png";

function Pagination({ gamesPerPage, totalGames, currentPage, paginate }) {
  const pages = [];
  const totalPages = Math.ceil(totalGames / gamesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const changePage = (number) => {
    paginate(number);
  };

  return (
    <ul className={styles.Pagination}>
      <li>
        {currentPage !== 1
        ? (<button className={styles.ButtonPaginate} onClick={() => currentPage > 1 && changePage(currentPage - 1)}><img src={previousIcon} alt="previous-icon-active"/></button>)
        : (<button className={styles.ButtonPaginate} disabled={true}><img src={previousIconD} alt="previous-icon-disabled"/></button>)
        }
      </li>
      {pages.map((number) => (
        <li key={number}>
          <button className={number === currentPage ? styles.NumberActive : styles.Numbers} onClick={() => changePage(number)}>
            {number}
          </button>
        </li>
      ))}
      <li>
        {currentPage !== totalPages
        ? (<button className={styles.ButtonPaginate} onClick={() => currentPage !== totalPages && changePage(currentPage + 1)}><img src={nextIcon} alt="previous-icon-active"/></button>)
        : (<button className={styles.ButtonPaginate} disabled="true"><img src={nextIconD} alt="next-icon-disabled"/></button>)
        }
      </li>
    </ul>
  );
}

export default Pagination;
