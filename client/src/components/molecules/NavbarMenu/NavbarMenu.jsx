import React from "react";

import styles from "./NavbarMenu.module.css";
import addButton from "../../../assets/svg/icons/icon-add.svg";

import avatar from "../../../assets/images/menu/avatar.png";

function NavbarMenu() {
  return (
    <>
      <div className={styles.RightMenu}>
        <button className={styles.ButtonAdd}>
          <img src={addButton} alt="addButtonImg" /> Create Videogame
        </button>

          <img className={styles.AvatarImg} src={avatar} alt="avatar-img" />

      </div>
    </>
  );
}

export default NavbarMenu;
