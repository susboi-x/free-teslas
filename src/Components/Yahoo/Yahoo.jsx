import React from "react";
import classes from "./Yahoo.module.css";
import cyber from "../../assets/bmw.png";
import Fade from "react-reveal/Fade";

const Yahoo = () => {
  return (
    <section className={classes.yahoo}>
      <Fade left>
        <div className={classes.left}>
          <img src={cyber} alt="cyber security" />
        </div>
      </Fade>
      <Fade right>
        <div className={classes.right}>
          <h2>
          Curated selection of high-quality vehicles
          </h2>
          <p>
          Zed Cars prides itself on offering a meticulously curated selection of high-quality vehicles that cater to diverse tastes and preferences.
          </p>
          <h2>Customer-Centric Selection</h2>
          <p>
          The selection process is customer-oriented, aiming to anticipate and meet the varied preferences and expectations of their clientele, ensuring satisfaction with every purchase.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Yahoo;
