import React, { useState } from "react";
import styles from "./index.module.scss";
const buttons = ["Overview", "Repositories", "Projects", "packages", "Stars"];

export const HeaderNav = () => {
  const [selectedHeaderButton, setSelectedHeaderButton] = useState(0);

  return (
    <div className={styles.headerNav}>
      <div className={styles.NavItems}>
        {buttons.map((text, index) => (
          <button
            key={index}
            className={`${styles.navButton} ${selectedHeaderButton === index ? styles.headerSelected : ""}`}
            onClick={() => setSelectedHeaderButton(index)}>
            <div className={styles.navIcon}>◎</div>
            <p className={styles.navText}>{text}</p>
          </button>
        ))}
      </div>
      <div className={styles.NavSpButton}>x</div>
    </div>
  );
};
