import { Header } from "../Header";
import { Overview } from "../Overview";
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
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleSidebar={toggleSidebar}
      />
      <Overview />
      <Footer />
      <Sidebar isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};
