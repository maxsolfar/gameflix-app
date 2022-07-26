import React, { useState } from "react";

import styles from "./FilterBar.module.css";
import openButton from "../../../assets/svg/icons/menu-icon.svg";


import icon1 from "../../../assets/images/menu/icon1-select.png";
import icon2 from "../../../assets/images/menu/icon2-select.png";
import icon3 from "../../../assets/images/menu/icon3-select.png";
import icon4 from "../../../assets/images/menu/icon4-select.png";
import icon5 from "../../../assets/svg/icons/icon-refresh.png";

import { orderASC, orderDES, highestRATING, lowestRATING, dataFromDB, dataFromAPI, dataFromAll, filterByGenre} from "../../../actions/actions";

import { useDispatch, useSelector } from "react-redux";
function FilterBar({paginate}) {

  const dispatch = useDispatch();
  const [openToggle, setOpenToggle] = useState(false);


  const initialSelects = {
    genres: "",
    data: "",
    sort: "",
    rating: "",
  }
  const [filterSelects, setFilterSelects] = useState(initialSelects); 


  const actionToggle = () => {
    setOpenToggle(!openToggle);
  };
  

  const genres = useSelector((state) => state.genres);


  function handleChange(e){
    e.preventDefault();
    //dispatch(getPage(1));
    paginate(1);
    filterSelects[e.target.name] = e.target.value;
    switch(e.target.value){
      case "A-Z": dispatch(orderASC());
      break;
      case "Z-A": dispatch(orderDES())
      break;
      case "highest": dispatch(highestRATING());
      break;
      case "lowest": dispatch(lowestRATING());
      break;
      case "API": dispatch(dataFromAPI());
      break;
      case "DB": dispatch(dataFromDB());
      break;
      case "All": dispatch(dataFromAll());
      break;
      default: dispatch(dataFromAll());
    }
   
  }

  function handleSelectGenre(e){
    e.preventDefault();
    paginate(1);
    filterSelects[e.target.name] = e.target.value;
    switch(e.target.value){
      case "AllTypes": dispatch(dataFromAll());
      break;
      default: dispatch(filterByGenre(e.target.value));
    }
  }

  function refreshFilters(e){
    e.preventDefault();
    setFilterSelects(initialSelects)
    dispatch(dataFromAll());
    paginate(1);
  }



  return (
    <>
      <section className={!openToggle ? `${styles.FilterBar}` : `${styles.FilterBarClose}`}>

        <img className={styles.AvatarImg} src={icon1} alt="avatar-img" />
        <select value={filterSelects.genres} onChange={handleSelectGenre} name="genres">
          <option value="" disabled selected hidden>Select Genre:</option>
          <option value="AllTypes"> - All - </option>
          {genres && genres.map((genre, index)=>(
            <option key={index} value={`${genre.name}`}>{genre.name}</option>
          ))}
        </select>

        <img className={styles.AvatarImg} src={icon2} alt="avatar-img" />
        <select value={filterSelects.data} onChange={handleChange} name="data">
          <option value="" disabled selected hidden>Data from:</option>
          <option value="All"> - All - </option>
          <option value="DB">Database</option>
          <option value="API">API</option>
        </select>
        <img className={styles.AvatarImg} src={icon3} alt="avatar-img" />
        <select value={filterSelects.sort} onChange={handleChange} name="sort">
          <option value="" disabled selected hidden>Order by Name:</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <img className={styles.AvatarImg} src={icon4} alt="avatar-img" />
        <select value={filterSelects.rating} onChange={handleChange} name="rating">
          <option value="" disabled selected hidden>Rating:</option>
          <option value="highest">Higher Rating</option>
          <option value="lowest">Lower Rating</option>
        </select>

        <img onClick={refreshFilters} className={styles.RefreshButton} src={icon5} alt="avatar-img" />
        
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
