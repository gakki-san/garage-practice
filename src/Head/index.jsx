import { Hamburger } from "../Hamburger";
import { HeaderNav } from "../HeaderNav";
import { Sidebar } from "../Sidebar";
import styles from "./index.module.scss";

export const Head = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerPadding}>
          <div className={styles.headerTop}>
            <div className={styles.headerLeft}>
              <div className={styles.headerHamburgerWrapper}>
                <button
                  onClick={handleOpenSidebar}
                  className={styles.headerHamburger}>
                  <Hamburger />
                </button>
                <Sidebar />
              </div>
              <div className={styles.headerLogoWrapper}>
                <button className={styles.headerLogo}>
                  <img src="" alt="" />◎
                </button>
              </div>
              <div className={styles.headerName}>trptz</div>
            </div>
            <div className={styles.headerRight}>
              <input
                type="text"
                placeholder="type to search"
                className={styles.headerInput}></input>
              <div className={styles.headerRightButtonWrapper}>
                <button className={styles.headerButton}>○</button>
              </div>
              <div className={styles.headerRightButtonWrapper}>
                <button className={styles.headerButton}>○</button>
              </div>
              <div className={styles.headerRightButtonWrapper}>
                <button className={styles.headerButton}>○</button>
              </div>
              <div className={styles.headerRightIconWrapper}>
                <button className={styles.headerButton}>
                  <img src="" alt="" />◎
                </button>
              </div>
            </div>
          </div>
          <HeaderNav />
        </div>
      </div>
    </>
  );
};
