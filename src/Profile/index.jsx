import { ProfileCard } from "../ProfileCard";
import styles from "./index.module.scss";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profilePadding}>
        <div className={styles.profileContainer}>
          <div className={styles.profileLeft}>
            <div className={styles.profileSpLeft}>
              <div className={styles.profileImageWrapper}>
                <img
                  className={styles.profileImage}
                  src="https://avatars.githubusercontent.com/u/40844605?v=4"
                  alt="ごんたの写真"
                />
              </div>
              <div className={styles.profileLeftNameWrapper}>
                <p className={styles.profileLeftName}>trptz</p>
                <p className={styles.profileLeftNickName}>trptz</p>
              </div>
            </div>
            <div className={styles.profileLeftEditButtonWrapper}>
              <button className={styles.profileLeftEditButton}>
                Edit Profile
              </button>
            </div>
          </div>
          <div className={styles.profileRight}>
            <div className={styles.profileRightTitleWrapper}>
              <h3 className={styles.profileRightTitle}>Popular Repositories</h3>
              <p className={styles.profileRightText}>Customize your pins</p>
            </div>
            <div className={styles.profileRightCards}>
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
