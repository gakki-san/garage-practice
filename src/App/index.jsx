import { Header } from "../Header";
import { Profile } from "../Profile";
import { Sidebar } from "../Sidebar";
import { Footer } from "../footer";
import styles from "./index.module.scss";
import React, { useState } from "react";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.css}>
        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleSidebar={toggleSidebar}
        />
        <Profile />
        <Footer />
        <Sidebar isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};
