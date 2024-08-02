import styles from "./index.module.scss";

export const OverviewCard = () => {
  return (
    <div className={styles.overviewRightCard}>
      <div className={styles.overviewRightCardTitleWrapper}>
        <p className={styles.overviewRightCardTitle}>aaa</p>
        <div className={styles.overviewRightCardPublic}>Public</div>
      </div>
      <div className={styles.overviewRightCardSubtitleWrapper}>
        <p className={styles.overviewRightCardSubtitle}>bbb</p>
      </div>
      <div className={styles.overviewRightCardFooter}>
        <div className={styles.overviewRightCardColor}></div>
        <p className={styles.overviewRightCardLanguage}>TypeScript</p>
        <div className={styles.overviewRightCardMark}>☆ 1</div>
      </div>
    </div>
  );
};
