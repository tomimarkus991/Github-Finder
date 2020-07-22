import React from "react";
import PropTypes from "prop-types";

const About = ({ version }) => {
  return (
    <div>
      <h1>About page</h1>
      <p>Version {version}</p>
    </div>
  );
};

About.defaultProps = {
  version: "1.0.0",
};

About.propTypes = {
  version: PropTypes.string.isRequired,
};

export default About;
