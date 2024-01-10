import React from "react";
import classes from "./Try.module.css";
import Fade from "react-reveal/Fade";

const Try = () => {
  return (
    <section className={classes.try}>
      <div className={classes.left}>
        <p>Try Zed Cars now</p>
        <Fade left>
          <h1>Start dealing Vehicles in just 10 minutes</h1>
        </Fade>
      </div>
      <div className={classes.right}>
        <Fade right>
          <button className="btn">Contact Us</button>
        </Fade>
      </div>
    </section>
  );
};

export default Try;
