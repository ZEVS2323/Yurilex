import React from "react";
import styles from "../main/Main.module.css";
import Banner from "./blocks/banner/Banner";

function Main() {
  return (
    <main className={styles.mainContainer}>
      <Banner />
    </main>
  );
}

export default Main;
