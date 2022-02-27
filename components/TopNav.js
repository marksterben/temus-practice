import { useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/components/TopNav.module.scss";

const TopNav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={`${styles.topnav} ${menu ? styles.responsive : ""}`}>
      <span className={styles.navBrand}>Temus</span>

      <span className={styles.icon} onClick={() => setMenu(!menu)}>
        <FontAwesomeIcon icon={faBars} />
      </span>

      <a href="#one">WHY WE EXIST</a>
      <a href="#two">WHAT MAKES US UNIQUE</a>
      <a href="#three">OUR RECENT WORK</a>
      <a href="#four">WORK WITH US</a>
    </div>
  );
};

export default TopNav;
