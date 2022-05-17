import React from 'react';

import InputSearch from "../../molecules/InputSearch/InputSearch";

import styles from "./Navbar.module.css";
import logo from "../../../assets/images/logoGX.png";
import NavbarMenu from '../../molecules/NavbarMenu/NavbarMenu';
import FilterBar from '../FilterBar/FilterBar';
import BannerHome from "../BannerHome/BannerHome";

function Navbar() {
  return (
    <>
        <nav className={styles.Navbar}>
            <div className={styles.Container}>
              <img src={logo} className={styles.Logo} alt="logo-gameflix" />
              <InputSearch />
              <NavbarMenu/>
            </div>
        </nav>
        <FilterBar/>
        <BannerHome/>
    </>
  )
}

export default Navbar