import { Head } from "../Head";
import { Overview } from "../Overview";
import { Footer } from "../footer";
import styles from "./index.module.scss";

export const App = () => {
  return (
    <>
      <Head />
      <Overview />
      <Footer />
    </>
  );
};
