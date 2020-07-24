import React, { Fragment } from "react";
import spinner from "./spinner.svg";

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt="Loading..." className="w-200 m-auto d-block" />
  </Fragment>
);

export default Spinner;
