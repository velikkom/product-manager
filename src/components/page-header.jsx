import React from "react";
import styles from "./page-header.module.scss";

export const PageHeader = ({ title }) => {
  return (
    <h1 className={styles.pageHeader}>
      <span>{title}</span>
    </h1>
  );
};
