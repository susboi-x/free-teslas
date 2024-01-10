import React from "react";
import classes from "./Payments.module.css";
import paycar from "../../assets/pcar.png"
import { AiFillCheckCircle } from "react-icons/ai";
import { Fade } from "react-reveal";

const Payments = () => {
  return (
    <section className={classes.payments}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h1>Fast luxury cars</h1>
          <p>Finding a car is hard. Buying it shouldn’t be.</p>
        </div>
        <Fade left>
          <div className={classes.pos}>
            <img src={paycar} alt="" />
          </div>
        </Fade>
      </div>
      <div className={classes.right}>
        <h2 className={classes["top-right"]}>
          Delight customers with a seamless cruising experience
        </h2>
        <p>
          Give your customers the gift of modern, exquisite, luxury cars. Buy at
          Zed Cars once and let your cars do the talking for you.
        </p>
        <ul>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Porche
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Mercedes
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Ferrari
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            BMW
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Lamborghini
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Tesla
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Audi
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Toyota
          </li>
        </ul>
        <h2>Enjoy phenomenal quick car deliveries</h2>
        <p>
          We automatically route deliveries through the most optimal channels,
          ensuring the quickest and deal conclusions in the market.
        </p>
      </div>
    </section>
  );
};

export default Payments;
