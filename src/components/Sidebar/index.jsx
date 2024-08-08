import styles from "./index.module.scss";
import React from "react";

const sidebarItems = [
  { id: 1, text: "◎ Home" },
  { id: 2, text: "◎ issues" },
  { id: 3, text: "◎ Pull request" },
  { id: 4, text: "◎ Projects" },
  { id: 5, text: "◎ Discussions" },
  { id: 6, text: "◎ Codespaces" },
];

export const Sidebar = ({ isMenuOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
      <div className={styles.sidebarBackground}>
        <div className={styles.sidebarHead}>
          <div className={styles.sidebarLogo}>
            <a href="#">◎</a>
          </div>
          <button onClick={toggleSidebar} className={styles.sidebarCloseButton}>
            x
          </button>
        </div>
        <ul className={styles.linkLists}>
          {sidebarItems.map((sidebarItem) => (
            <li className={styles.linkList} key={sidebarItem.id}>
              <a href="#">{sidebarItem.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
