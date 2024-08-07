import { ProfileCard } from "../ProfileCard";
import styles from "./index.module.scss";

const name = "trptz";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.sideSpacing}>
        <div className={styles.profileContainer}>
          <div className={styles.account}>
            <div className={styles.spAccount}>
              <div className={styles.imageWrapper}>
                <img
                  className={styles.image}
                  src="https://avatars.githubusercontent.com/u/40844605?v=4"
                  alt="ごんたという名の柴犬"
                />
              </div>
              <div className={styles.nameWrapper}>
                <p className={styles.accountName}>{name}</p>
                <p className={styles.nickName}>{name}</p>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.editButton}>Edit Profile</button>
            </div>
          </div>
          <div className={styles.repositoriesWrapper}>
            <div className={styles.titleWrapper}>
              <h3 className={styles.title}>Popular Repositories</h3>
              <p className={styles.text}>Customize your pins</p>
            </div>
            <div className={styles.repositoriesCard}>
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
