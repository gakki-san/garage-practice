import styles from "./index.module.scss";

export const Button = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.buttonWrapper}>
          <button className={styles.menuButton}>MENU</button>
        </div>
      </div>
    </>
  );
};
