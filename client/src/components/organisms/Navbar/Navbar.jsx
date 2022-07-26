import React from 'react';

import InputSearch from "../../molecules/InputSearch/InputSearch";

import styles from "./Navbar.module.css";
import logo from "../../../assets/images/logoGX.png";
import NavbarMenu from '../../molecules/NavbarMenu/NavbarMenu';
import FilterBar from '../FilterBar/FilterBar';
import BannerHome from "../BannerHome/BannerHome";

import Topbar from '../Topbar/Topbar';

import { Link } from "react-router-dom";

function Navbar({paginate, page}) {

  return (
    <>
      {page === "home" ?
      <> 
        <nav className={styles.Navbar}>
            <div className={styles.Container}>
              <Link to={"/games"}>
                <img src={logo} className={styles.Logo} alt="logo-gameflix" />
              </Link>
              <InputSearch paginate={paginate} />
              <NavbarMenu/>
            </div>
        </nav>
        <FilterBar paginate={paginate}/>
        <BannerHome/>
      </> :
      <> 
       <Topbar/>
      </> 
      }
    </>
  )
}

export default Navbar