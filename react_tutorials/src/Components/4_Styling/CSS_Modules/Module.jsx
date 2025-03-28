import React from "react";
import styles from "./style.module.css";

export default function Module() {
  return (
    <>
      <div>
        {/* we have to use css via modules using a variable name */}
        <h2 className={styles.title}>This is module page</h2>
        <h2 className={styles["the-content"]}>only for fun</h2>
      </div>
    </>
  );
}
