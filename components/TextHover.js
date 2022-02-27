import Image from "next/image";

import styles from "../styles/components/TextHover.module.scss";
import hoverItem from "../public/images/hover-item.jpg";

const TextHover = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>WHAT{"'"}S KEEPING US BUSY</p>
        <h1>TEMUS IN ACTION:</h1>
        <h1 className={styles.orangeText}>
          HOW WE{"'"}RE UNLOCKING A BETTER WORLD
        </h1>
      </div>

      <div className={styles.container}>
        <Image src={hoverItem} className={styles.image} alt="Notebook" />
        <div className={styles.content}>
          <p className={styles.contentHeader}>
            Shaping Immersive Lifestyle Apps
          </p>
          <p className={styles.contentBody}>
            Our client is a Pan-Asian insurer. We{"'"}re unlocking a potential
            10x boost in their user base by building an immersive,
            customercentric super app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextHover;
