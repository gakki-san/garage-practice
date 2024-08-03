import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.sideSpacing}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="" alt="" />◎
          </div>
          <div className={styles.title}>2024 Github,inc</div>
          <div className={styles.linkItem}>
            <a href="#">Term</a>
          </div>
          <div className={styles.linkItem}>
            <a href="#">Privacy</a>
          </div>
          <div className={styles.linkItem}>
            <a href="#">Security</a>
          </div>
          <div className={styles.linkItem}>
            <a href="#">Status</a>
          </div>
          <div className={styles.linkItem}>
            <a href="#">Contact</a>
          </div>
          <div className={styles.linkItem}>
            <a href="#">Manga cooks</a>
          </div>
          <div className={styles.linkItem}>
            <a href="#">Do not share my personal information</a>
          </div>
        </div>
        <div className={styles.footerSpItem}>◎2024 Github,inc</div>
      </div>
    </div>
  );
};
