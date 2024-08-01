import { OverviewCard } from "../OverviewCard";
import styles from "./index.module.scss";

export const Overview = () => {
  return (
    <>
      <div className={styles.overview}>
        <div className={styles.overviewPadding}>
          <div className={styles.overviewContainer}>
            <div className={styles.overviewLeft}>
              <div className={styles.overviewSpLeft}>
                <div className={styles.overviewImageWrapper}>
                  <img
                    className={styles.overviewImage}
                    src="https://avatars.githubusercontent.com/u/40844605?v=4"
                    alt="ごんたの写真"
                  />
                </div>
                <div className={styles.overviewLeftNameWrapper}>
                  <p className={styles.overviewLeftName}>trptz</p>
                  <p className={styles.overviewLeftNickName}>trptz</p>
                </div>
              </div>
              <div className={styles.overviewLeftEditButtonWrapper}>
                <button className={styles.overviewLeftEditButton}>
                  Edit Profile
                </button>
              </div>
            </div>
            <div className={styles.overviewRight}>
              <div className={styles.overviewRightTitleWrapper}>
                <h3 className={styles.overviewRightTitle}>
                  Popular Repositories
                </h3>
                <p className={styles.overviewRightText}>Customize your pins</p>
              </div>
              <div className={styles.overviewRightCards}>
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
