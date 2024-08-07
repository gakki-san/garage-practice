import React, { useState } from "react";
import styles from "./index.module.scss";
const buttons = [
  { id: 1, text: "Overview" },
  { id: 2, text: "Repositories" },
  { id: 3, text: "Projects" },
  { id: 4, text: "packages" },
  { id: 5, text: "Stars" },
];

export const HeaderNav = () => {
  const [selectedHeaderButtonIndex, setSelectedHeaderButtonIndex] = useState(0);

  return (
    <div className={styles.headerNav}>
      <div className={styles.NavItems}>
        {buttons.map((button, index) => (
          <button
            key={button.id}
            className={`${styles.navButton} ${selectedHeaderButtonIndex === index && styles.headerSelected}`}
            onClick={() => setSelectedHeaderButtonIndex(index)}>
            <div className={styles.navIcon}>◎</div>
            <div className={styles.navText}>{button.text}</div>
          </button>
        ))}
      </div>
      <div className={styles.NavSpButton}>x</div>
    </div>
  );
};
