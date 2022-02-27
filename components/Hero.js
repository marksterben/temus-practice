import Image from "next/image";

import styles from "../styles/components/Hero.module.scss";
import aliceSprite from "../public/images/alice-sprite.png";

const Hero = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <h1>
          UNLOCKING <br /> ECONOMIC AND <br /> SOCIAL VALUE
        </h1>
        <p>Through Holistic Transformation Enabled by Technology</p>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.picContainer}>
          <Image
            id="red-queen_and_alice_sprite"
            src={aliceSprite}
            alt="Alice and the Red Queen running to stay in place."
            className={styles.pic}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
