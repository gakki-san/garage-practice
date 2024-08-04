import styles from "./index.module.scss";

export const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.titleWrapper}>
        <p className={styles.cardTitle}>aaa</p>
        <div className={styles.profileAccessControl}>Public</div>
      </div>
      <div className={styles.subTitleWrapper}>
        <p className={styles.subTitle}>bbb</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.colorPoint}></div>
        <p className={styles.cardLanguage}>TypeScript</p>
        <div className={styles.cardFavorite}>☆ 1</div>
      </div>
    </div>
  );
};
