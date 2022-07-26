import React, { useRef } from "react";

import styles from "./FormCreate.module.css";

function FormCreate() {
  const nameRef = useRef();

  function onKeyUp(e) {}

  function handleChange(e) {}

  return (
    <>
      <form className={styles.ContainerForm}>
        <div className={styles.SectionInput}>
          <label className={styles.Label} htmlFor="InputName">
            <span>TITLE:</span>
          </label>
          <input
            className={`${styles.Input} ${styles.InputName}`}
            type="text"
            ref={nameRef}
            tabIndex="1"
            placeholder="Videogame's title..."
            //value="{search}"
            name="InputName"
            onKeyPress={onKeyUp}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={`${styles.SectionInput} ${styles.ThreeColumns}`}>
          <div className={styles.OneColumn}>
            <label className={styles.Label} htmlFor="InputWebsite">
              <span>WEBSITE:</span>
            </label>
            <input
              className={`${styles.Input} ${styles.InputWebsite}`}
              type="text"
              tabIndex="2"
              placeholder="Videogame's website..."
              //value="{search}"
              name="InputWebsite"
              onKeyPress={onKeyUp}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.OneColumn}>
            <label className={styles.Label} htmlFor="InputDate">
              <span>RELEASED:</span>
            </label>
            <input
              className={`${styles.Input} ${styles.InputDate}`}
              type="date"
              tabIndex="3"
              //value="{search}"
              name="InputDate"
              onKeyPress={onKeyUp}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={styles.OneColumn}>
            <label className={styles.Label} htmlFor="InputRating">
              <span>RATING:</span>
            </label>
            <input
              className={`${styles.Input} ${styles.InputRating}`}
              type="text"
              tabIndex="4"
              placeholder="0 - 5"
              //value="{search}"
              name="InputRating"
              onKeyPress={onKeyUp}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className={`${styles.SectionInput} ${styles.ThreeColumns}`}>
          <div className={styles.OneColumn}>
            <label className={styles.Label} htmlFor="InputImage">
              <span>IMAGE URL:</span>
            </label>
            <input
              className={`${styles.Input} ${styles.InputImage}`}
              type="text"
              tabIndex="4"
              placeholder="Paste the url of image"
              //value="{search}"
              name="InputImage"
              onKeyPress={onKeyUp}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.OneColumn}>
            <label className={styles.Label} htmlFor="InputImage">
              <span>IMAGE URL:</span>
            </label>
            <input
              className={`${styles.Input} ${styles.InputAddImage}`}
              type="text"
              tabIndex="4"
              placeholder="Paste the url of image"
              //value="{search}"
              name="InputAdditionalImage"
              onKeyPress={onKeyUp}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className={styles.SectionInput}>
          <label className={styles.Label} htmlFor="InputDescription">
            <span>DESCRIPTION:</span>
          </label>
          <textarea
            className={`${styles.TextArea} ${styles.InputDescription}`}
            type="text"
            tabIndex="5"
            placeholder="Videogame's description..."
            //value="{search}"
            onKeyPress={onKeyUp}
            name="InputDescription"
            rows="5"
            cols="50"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </>
  );
}

export default FormCreate;
