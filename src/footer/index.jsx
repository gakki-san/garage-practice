import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerPadding}>
          <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
              <img src="" alt="" />◎
            </div>
            <div className={styles.footerItem}>◎2024 Github,inc</div>
            <div className={styles.footerItem}>
              <a href="#">Term</a>
            </div>
            <div className={styles.footerItem}>
              <a href="#">Privacy</a>
            </div>
            <div className={styles.footerItem}>
              <a href="#">Security</a>
            </div>
            <div className={styles.footerItem}>
              <a href="#">Status</a>
            </div>
            <div className={styles.footerItem}>
              <a href="#">Contact</a>
            </div>
            <div className={styles.footerItem}>
              <a href="#">Manga cooks</a>
            </div>
            <div className={styles.footerItem}>
              <a href="#">Do not share my personal information</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
