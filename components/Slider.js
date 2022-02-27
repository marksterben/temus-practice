import Image from "next/image";

import styles from "../styles/components/Slider.module.scss";
import slideItem from "../public/images/slider.jpg";
import { useState } from "react";

const Slider = () => {
  return (
    <>
      <div className={styles.title}>
        <p>WHY WE DIFFERENT</p>
        <h1>THE TEMUS TOUCH:</h1>
        <h1 className={styles.orangeText}>WHAT MAKE US UNIQUE</h1>
      </div>

      <div className={styles.slider}>
        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We’re with You from Ideation to Implementation</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We Design for Real Life</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We Go Beneath the Hood</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We Simplify to Move Fast</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We are Unconstrained by Rigid Frameworks</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We’re with You from Ideation to Implementation</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We Design for Real Life</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We Go Beneath the Hood</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We Simplify to Move Fast</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image src={slideItem} className={styles.image} alt="Notebook" />
          <div className={styles.content}>
            <p>We are Unconstrained by Rigid Frameworks</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
