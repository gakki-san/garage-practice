import React, { useState } from "react";
import styles from "./index.module.scss";

export const HeaderNav = () => {
  const [selectedHeaderButton, setSelectedHeaderButton] = useState(0);

  const buttons = ["Overview", "Repositories", "Projects", "packages", "Stars"];
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
