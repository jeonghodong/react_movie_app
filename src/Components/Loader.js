import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.container}>
      <h2>
        <div className={styles.lds_roller}>
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
