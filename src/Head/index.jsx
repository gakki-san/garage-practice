import { Hamburger } from "../Hamburger";
import { HeaderNav } from "../HeaderNav";
import styles from "./index.module.scss";
import React from "react";

export const Head = ({ toggleSidebar }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerPadding}>
          <div className={styles.headerTop}>
            <div className={styles.headerLeft}>
              <div className={styles.headerHamburgerWrapper}>
                <button
                  onClick={toggleSidebar}
                  className={styles.headerHamburger}>
                  <Hamburger />
                </button>
              </div>
              <div className={styles.headerLogoWrapper}>
                <button className={styles.headerLogo}>
                  <img src="" alt="" />◎
                </button>
              </div>
              <div className={styles.headerName}>trptz</div>
            </div>
            <div className={styles.headerRight}>
              <input
                type="text"
                placeholder="type to search"
                className={styles.headerInput}></input>
              <div className={styles.headerRightButtonWrapper}>
                <button className={styles.headerButton}>○</button>
              </div>
              <div className={styles.headerRightButtonWrapper}>
                <button className={styles.headerButton}>○</button>
              </div>
              <div className={styles.headerRightButtonWrapper}>
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
      </div>
    </>
  );
};
