import React from "react";
import PropTypes from "prop-types";
import home from "../../assets/home.svg";
import styles from "./Layout.module.css";
import { useHistory } from "react-router";

export default function Layout({ children }) {
  const history = useHistory();
  function goHome() {
    history.push("/");
  }

  return (
    <div className={styles.container}>
      <img onClick={goHome} className={styles.home} src={home} />
      <div className={styles.children}>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
