import React, { useState } from "react";

import styles from "./FilterBar.module.css";
import openButton from "../../../assets/svg/icons/menu-icon.svg";

import icon1 from "../../../assets/images/menu/icon1-select.png";
import icon2 from "../../../assets/images/menu/icon2-select.png";
import icon3 from "../../../assets/images/menu/icon3-select.png";
import icon4 from "../../../assets/images/menu/icon4-select.png";
import { useSelector } from "react-redux";
function FilterBar() {
  const [openToggle, setOpenToggle] = useState(false);

  const actionToggle = () => {
    setOpenToggle(!openToggle);
  };

  const genres = useSelector((state) => state.genres);

  return (
    <>
    {console.log(genres)}
      <section className={!openToggle ? `${styles.FilterBar}` : `${styles.FilterBarClose}`}>

    
        <img className={styles.AvatarImg} src={icon1} alt="avatar-img" />
        <select name="genre">
          <option value="" disabled selected hidden>Select Genre:</option>
          <option value="All"> - All - </option>
          {genres && genres.map((genre, index)=>(
            <option key={index} value={`${genre.name}`}>{genre.name}</option>
          ))}
        </select>

        <img className={styles.AvatarImg} src={icon2} alt="avatar-img" />
        <select name="data">
          <option value="" disabled selected hidden>Data from:</option>
          <option value="All"> - All - </option>
          <option value="Database">Database</option>
          <option value="Api">API</option>
        </select>
        <img className={styles.AvatarImg} src={icon3} alt="avatar-img" />
        <select name="order">
          <option value="" disabled selected hidden>Order:</option>
          <option value="All"> - Default - </option>
          <option value="Database">A-Z</option>
          <option value="Api">Z-A</option>
        </select>
        <img className={styles.AvatarImg} src={icon4} alt="avatar-img" />
        <select name="rating">
          <option value="" disabled selected hidden>Rating:</option>
          <option value="All"> - Default - </option>
          <option value="Database">Higher Rating</option>
          <option value="Api">Lower Rating</option>
        </select>
        
      </section>

      <button
        className={
          !openToggle ? `${styles.ButtonClose}` : `${styles.ButtonOpen}`
        }
        onClick={actionToggle}
      >
        <img src={openButton} alt="openButtonImg" />
        Options</button>
    </>
  );
}

export default FilterBar;
