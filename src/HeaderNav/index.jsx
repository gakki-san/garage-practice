import React, { useState } from "react";
import styles from "./index.module.scss";

export const HeaderNav = () => {
  const [selectedHeaderButton, setSelectedHeaderButton] = useState(0);

  const buttons = ["Overview", "Repositories", "Projects", "packages", "Stars"];
  return (
    <div className={styles.headerNav}>
      <div className={styles.headerNavItems}>
        {buttons.map((text, index) => (
          <button
            key={index}
            className={`${styles.headerNavButton} ${selectedHeaderButton === index ? styles.headerSelected : ""}`}
            onClick={() => setSelectedHeaderButton(index)}>
            <div className={styles.headerNavIcon}>◎</div>
            <p className={styles.headerNavText}>{text}</p>
          </button>
        ))}
      </div>
      <div className={styles.headerNavSpButton}>x</div>
    </div>
  );
};
