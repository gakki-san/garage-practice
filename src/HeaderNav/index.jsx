import React, { useState } from "react";
import styles from "./index.module.scss";
const buttons = ["Overview", "Repositories", "Projects", "packages", "Stars"];

export const HeaderNav = () => {
  const [selectedHeaderButtonIndex, setSelectedHeaderButtonIndex] = useState(0);

  return (
    <div className={styles.headerNav}>
      <div className={styles.NavItems}>
        {buttons.map((text, index) => (
          <button
            key={index}
            className={`${styles.navButton} ${selectedHeaderButtonIndex === index ? styles.headerSelected : ""}`}
            onClick={() => setSelectedHeaderButtonIndex(index)}>
            <div className={styles.navIcon}>◎</div>
            <p className={styles.navText}>{text}</p>
          </button>
        ))}
      </div>
      <div className={styles.NavSpButton}>x</div>
    </div>
  );
};
