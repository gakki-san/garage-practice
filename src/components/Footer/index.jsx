import styles from "./index.module.scss";

const linkItems = [
  { id: 1, text: "Term" },
  { id: 2, text: "Privacy" },
  { id: 3, text: "Security" },
  { id: 4, text: "Status" },
  { id: 5, text: "Contact" },
  { id: 6, text: "Manga cooks" },
  { id: 7, text: "Do not share my personal information" },
];

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.sideSpacing}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="" alt="" />◎
          </div>
          <div className={styles.title}>2024 Github,inc</div>
          <ul className={styles.linkItemList}>
            {linkItems.map((linkItem) => (
              <li className={styles.linkItem} key={linkItem.id}>
                <a href="#">{linkItem.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerSpItem}>◎2024 Github,inc</div>
      </div>
    </div>
  );
};
