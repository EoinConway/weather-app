import { Fragment } from "react";
import Timer from './Timer';

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>London</h1>
          <div> Header time comp </div>
          <div> Current temp </div>
        {/* <div className={classes.lower}>Timer comp</div> */}
      </header>
      <Timer />
    </Fragment>
  );
};

export default Header;
