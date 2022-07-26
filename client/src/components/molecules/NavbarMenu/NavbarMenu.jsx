import React from "react";

import styles from "./NavbarMenu.module.css";
import addButton from "../../../assets/svg/icons/icon-add.svg";

import avatar from "../../../assets/images/menu/avatar.png";

import { Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <>
      <div className={styles.RightMenu}>
        <Link to={"/game/newgame"}>    
          <button className={styles.ButtonAdd}>
            <img src={addButton} alt="addButtonImg" /> Create Videogame
          </button>
        </Link>
          <img className={styles.AvatarImg} src={avatar} alt="avatar-img" />

      </div>
    </>
  );
}

export default NavbarMenu;
