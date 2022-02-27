import Image from "next/image";

import styles from "../styles/components/Carousel.module.scss";
import carouselItem from "../public/images/carousel-item.jpg";
import { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const onClickHandler = (val) => {
    if (val > 2) setIndex(0);
    else if (val < 0) setIndex(2);
    else setIndex(val);
  };

  return (
    <>
      <div className={styles.title}>
        <p>WHY WE EXIST</p>
        <h1 className={styles.orangeText}>DIGITAL TRANSFORMATION</h1>
        <h1>
          IS THE KEY THAT WILL <br /> UNLOCK A BETTER FUTURE
        </h1>
        <p>
          {
            "But there's a problem: it remains a daunting hurdle for many organisations"
          }
        </p>
      </div>

      <div className={styles.slideshow}>
        <div
          className={`${styles.mySlides} ${styles.fade} ${
            index === 0 ? styles.active : ""
          }`}
        >
          <div className={styles.imageContainer}>
            <Image src={carouselItem} className={styles.image} alt="" />
          </div>
          <div className={styles.desc}>
            <p className={styles.small}>ENTER TEMUS</p>
            <p className={styles.big}>
              We exist to help <br /> technology work <br /> harder for our
              clients,
              <br /> so lifechanging tech
              <br /> can make the present <br />
              feel like the future.
            </p>
          </div>
        </div>

        <div
          className={`${styles.mySlides} ${styles.fade} ${
            index === 1 ? styles.active : ""
          }`}
        >
          <div className={styles.imageContainer}>
            <Image src={carouselItem} className={styles.image} alt="" />
          </div>
          <div className={styles.desc}>
            <p className={styles.small}>ENTER TEMUS</p>
            <p className={styles.big}>
              We remove the <br />
              hurdles holding back
              <br /> game-changing
              <br /> evolution.
            </p>
          </div>
        </div>

        <div
          className={`${styles.mySlides} ${styles.fade} ${
            index === 2 ? styles.active : ""
          }`}
        >
          <div className={styles.imageContainer}>
            <Image src={carouselItem} className={styles.image} alt="" />
          </div>
          <div className={styles.desc}>
            <p className={styles.small}>ENTER TEMUS</p>
            <p className={styles.big}>
              We grow your digital
              <br /> capabilities, so digital
              <br /> can accelerate future-
              <br />
              ready growth
            </p>
          </div>
        </div>

        <span className={styles.prev} onClick={() => onClickHandler(index - 1)}>
          ←
        </span>
        <span className={styles.next} onClick={() => onClickHandler(index + 1)}>
          →
        </span>
      </div>
    </>
  );
};

export default Carousel;
