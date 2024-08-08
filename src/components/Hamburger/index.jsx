import styles from "./index.module.scss";

export const Hamburger = () => {
  return (
    <div className={styles.hamburger}>
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
    </div>
  );
};
