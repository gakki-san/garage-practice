import styles from "./index.module.scss";

export const App = () => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <button className={styles.hamburgerMenu}>☰</button>
            <a href="#">🐧</a>
            <button className={styles.accountName}>trptz</button>
          </div>

          <div className={styles.headerRight}>
            <input type="text" placeholder="Type to search" />
            <button>●</button>
            <a href="#">●</a>
            <a href="#">●</a>
            <a href="#">●</a>
            <button>🐷</button>
          </div>
        </div>

        <div className={styles.navigationMenu}>
          <button className={styles.selectedButton}>◎ Overview</button>
          <button>◎ Repositories</button>
          <button>◎ Projects</button>
          <button>◎ Packages</button>
          <button>◎ Stars</button>
        </div>
      </header>
    </>
  );
};
