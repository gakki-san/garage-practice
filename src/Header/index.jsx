import { Hamburger } from "../Hamburger";
import { HeaderNav } from "../HeaderNav";
import styles from "./index.module.scss";
import React from "react";

export const Header = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.sideSpacing}>
        <div className={styles.container}>
          <div className={styles.headerBarStart}>
            <div className={styles.headerHamburgerWrapper}>
              <button onClick={toggleSidebar} className={styles.Hamburger}>
                <Hamburger />
              </button>
            </div>
            <div className={styles.LogoWrapper}>
              <button className={styles.logo}>
                <img src="" alt="" />◎
              </button>
            </div>
            <div className={styles.headerName}>trptz</div>
          </div>
          <div className={styles.headerBarEnd}>
            <input
              type="text"
              placeholder="type to search"
              className={styles.headerInput}></input>
            <div className={styles.buttonWrapper}>
              <button className={styles.headerButton}>○</button>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.headerButton}>○</button>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.headerButton}>○</button>
            </div>
            <div className={styles.headerRightIconWrapper}>
              <button className={styles.headerButton}>
                <img src="" alt="" />◎
              </button>
            </div>
          </div>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
};
