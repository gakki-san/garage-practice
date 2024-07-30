import styles from "./index.module.scss";

export const App = () => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <button className={styles.hamburgerMenu}>☰</button>
            <button
              className={`${styles.githubIcon} ${styles.githubIconPadding}`}
            >
              🐧
            </button>
            <button className={styles.accountName}>trptz</button>
          </div>

          <div className={styles.headerRight}>
            <input type="text" placeholder="Type to search" />
            <button className={styles.otherMenu}>●</button>
            <button className={styles.otherMenu}>●</button>
            <button className={styles.otherMenu}>●</button>
            <button className={styles.otherMenu}>🐷</button>
          </div>
        </div>

        <div className={styles.navigationMenu}>
          <button>◎ Overview</button>
          <button>◎ Repositories</button>
          <button>◎ Projects</button>
          <button>◎ Packages</button>
          <button>◎ Stars</button>
        </div>
      </header>
    </>
  );
};
