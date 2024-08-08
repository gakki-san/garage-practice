import styles from "./index.module.scss";

export const RepositoriesCard = () => {
  return (
    <div className={styles.repositoriesCard}>
      <div className={styles.titleWrapper}>
        <p className={styles.cardTitle}>aaa</p>
        <div className={styles.accessLevel}>Public</div>
      </div>
      <p className={styles.subTitle}>bbb</p>
      <div className={styles.cardFooter}>
        <div className={styles.colorPoint}></div>
        <p className={styles.programmingLanguage}>TypeScript</p>
        <div className={styles.favoriteCount}>☆ 1</div>
      </div>
    </div>
  );
};
