import React from "react";
import { Link,} from "react-router-dom";
import styles from "./Navitem.module.css";
const Navitem = (props) => {
    return (
      <li className={styles.navbarLink}>
        <Link to={`/${props.link}`}>{props.title}</Link>
      </li>
    );
};

export default Navitem;