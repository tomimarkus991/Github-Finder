import React, { Fragment } from "react";
import Users from "../Users/Users";
import Search from "../Users/Search";
import ScrollToTop from "../layout/ScrollToTop";

const Home = () => (
  <Fragment>
    <Search />
    <Users />
    <ScrollToTop />
  </Fragment>
);

export default Home;
