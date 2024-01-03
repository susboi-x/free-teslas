import React from "react";
import classes from "./Backed.module.css";
import { FaStripe, FaYCombinator } from "react-icons/fa";
import { SiVisa, SiMercedes, SiLamborghini, SiBmw } from "react-icons/si";

const Backed = () => {
  return (
    <section className={classes.backed}>
      <div className={classes.top}>
        <h1>Backed by strong global partners</h1>
        <p>
          Zed Cars is backed by notable investors as well as some of the best
          payments companies on the planet.
        </p>
      </div>
      <div className={classes.divs}>
        <div className={classes.div}>
          <SiMercedes className={classes.icon} />
          <p className={classes.text}>
            Zed Cars is highly technical and fanatically customer oriented.
            We’re excited to back such people in one of the world’s
            fastest-growing regions.
          </p>
          <p className={classes.name}>Patrick Collison</p>
        </div>
        <div className={classes.div}>
          <SiLamborghini className={classes.icon} />
          <p className={classes.text}>
            Our investment in Zed Cars aligns with the kind of investments we
            look for – those that will help extend our reach into the global
            commerce ecosystem
          </p>
          <p className={classes.name}>Otto Williams</p>
        </div>
        <div className={classes.div}>
          <SiBmw className={classes.icon} />
          <p className={classes.text}>
            As YC’s first American startup Zed Cars leads the charge of great
            companies coming out of USA, powering modern solutions for an
            entire continent.
          </p>
          <p className={classes.name}>Michael Seibel</p>
        </div>
      </div>
    </section>
  );
};

export default Backed;
