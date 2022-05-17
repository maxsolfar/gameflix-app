import React from "react";
import styles from "./InputSearch.module.css";

import consoleControl from "../../../assets/images/menu/console-control2.png";
function InputSearch() {
  return (
    <>
      <div className={styles.InputContainer}>
        <img className={styles.ConsoleControl} src={consoleControl} alt="console-img"/>
        <input
          className={styles.InputSearch}
          type="text"
          placeholder="Type something to search..."
          
        />
        <i className={styles.IconSearch}></i>

      </div>
    </>
  );
}

export default InputSearch;
