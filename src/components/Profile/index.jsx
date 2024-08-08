import { RepositoriesCard } from "../RepositoriesCard";
import styles from "./index.module.scss";

const useName = "trptz";

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
                <p className={styles.accountName}>{useName}</p>
                <p className={styles.nickName}>{useName}</p>
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
              <RepositoriesCard />
              <RepositoriesCard />
              <RepositoriesCard />
              <RepositoriesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
