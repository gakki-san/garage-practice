import { Hamburger } from "../Hamburger";
import styles from "./index.module.scss";

export const Head = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerLeft}>
            <div className={styles.headerHamburgerWrapper}>
              <button className={styles.headerHamburger}>
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
      </div>
    </>
  );
};
