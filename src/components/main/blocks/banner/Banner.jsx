import React from "react";
import styles from "../banner/Banner.module.css";

function Banner() {
  const backgroundImagePath = "/assets/img/Banner.jpeg";

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.blockContainer} _infoContiner`}>
        <div className={styles.containerInfo}>
          <h1 className={styles.title}>
            Empowering Insights, Engineering Tomorrow
          </h1>
          <p className={styles.text}>
            Yurilex pioneers cutting-edge tech for data processing and analysis,
            ensuring the highest quality and accuracy in data. Innovation meets
            precision for unparalleled insights
          </p>
        </div>
      </div>

      <div
        className={styles.mainBlockimg}
        style={{
          backgroundImage: `url(${backgroundImagePath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default Banner;
