import styles from "./index.module.scss";

export const DropDownMenu = () => {
  return (
    <>
      <div className={styles.dropDownMenu}>
        <h1 className={styles.dropDownMenuLogo}>TANAKA Works</h1>
        <button className={styles.dropDownMenuButton}>x</button>
        <ul className={styles.dropDownMenuList}>
          <li className="dropDownMenuitem">会社概要</li>
          <li className="dropDownMenuitem">価格表</li>
          <li className="dropDownMenuitem">実績</li>
          <li className="dropDownMenuitem">アクセス</li>
          <li className="dropDownMenuitem">よくある質問</li>
        </ul>
      </div>
    </>
  );
};
