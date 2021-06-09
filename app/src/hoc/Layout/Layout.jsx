import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="children">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
