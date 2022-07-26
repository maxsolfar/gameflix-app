import React, { useEffect, useRef, useState } from "react";
import styles from "./InputSearch.module.css";

import { getVideogamesByName } from "../../../actions/actions";
import consoleControl from "../../../assets/images/menu/console-control2.png";
import { useDispatch } from "react-redux";

import {cleanGames} from "../../../actions/actions";

function InputSearch({paginate}) {
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  const dispatch = useDispatch();

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function onKeyUp(e) {
    if (e.charCode === 13) {
      paginate(1);
      dispatch(cleanGames());
      dispatch(getVideogamesByName(search));
      setSearch("");
    }
  }

  useEffect(()=>{
    inputRef.current.focus();
  });
  
  return (
    <>
      <div className={styles.InputContainer}>
        <img className={styles.ConsoleControl} src={consoleControl} alt="console-img"/>
        <input
          className={styles.InputSearch}
          type="text"
          ref={inputRef}
          placeholder="Type something to search..."
          value={search}
          onKeyPress={onKeyUp}
          onChange={(e) => handleChange(e)}
        />
        <i className={styles.IconSearch}></i>

      </div>
    </>
  );
}

export default InputSearch;
