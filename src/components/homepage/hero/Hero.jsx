import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`${styles.container} globalPadding`}>
      <div className={styles.left}>
        <h2 className={`${styles.header} globalHeaderFont`}>
          Discover <span>Sweet</span> Delights!
        </h2>
        <h3 className={styles.para}>
          Savor the exquisite flavor of artisanal Middle Eastern chocolates,
          crafted with love and the highest quality ingredients.
        </h3>

        <button className={`${styles.btn} ${styles.btnD}`}>
          Browse Our Classic Flavors{" "}
          <img src="/images/btnArrow.svg" className={styles.btnArw} alt="" />
        </button>
      </div>

      <div className={styles.right}>
        <img
          src="/images/homepage/bgChoco.svg"
          className={styles.rtLayout}
          alt=""
        />

        <img
          src="/images/homepage/heroImage.png"
          className={styles.heroImage}
          alt=""
        />
      </div>

      <div className={styles.btnWrapper}>
        <Link className={`${styles.btn} ${styles.btnM}`}>
          Browse Our Classic Flavors{" "}
          <img src="/images/btnArrow.svg" className={styles.btnArw} alt="" />
        </Link>
      </div>
      <img
        src="/images/homepage/heroLayout.jpg"
        className={styles.leftLayImage}
        alt=""
      />
    </div>
  );
};

export default Hero;
