import React from "react";
import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles.loader}>
      <h2>
        <div className={styles.loader_roller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </h2>
    </div>
  );
}

export default Loader;
