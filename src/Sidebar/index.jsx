import styles from "./index.module.scss";
import React from "react";

export const Sidebar = ({ isMenuOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarBackground}>
          <div className={styles.sidebarHead}>
            <div className={styles.sidebarLogo}>
              <a href="#">◎</a>
            </div>
            <button
              onClick={toggleSidebar}
              className={styles.sidebarCloseButton}>
              x
            </button>
          </div>
          <ul className={styles.sidebarListItems}>
            <li className={styles.sidebarList}>
              <a href="#">◎ Home</a>
            </li>
            <li className={styles.sidebarList}>
              <a href="#">◎ issues</a>
            </li>
            <li className={styles.sidebarList}>
              <a href="#">◎ Pull request</a>
            </li>
            <li className={styles.sidebarList}>
              <a href="#">◎ Projects</a>
            </li>
            <li className={styles.sidebarList}>
              <a href="#">◎ Discussions</a>
            </li>
            <li className={styles.sidebarList}>
              <a href="#">◎ Codespaces</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
