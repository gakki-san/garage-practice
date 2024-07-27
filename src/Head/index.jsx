import { Hamburger } from "../Hamburger";
import { HeaderNav } from "../HeaderNav";
import { Sidebar } from "../Sidebar";
import styles from "./index.module.scss";
import React, { useState } from "react";

export const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                <Sidebar
                  isMenuOpen={isMenuOpen}
                  toggleSidebar={toggleSidebar}
                />
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
