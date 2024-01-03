import React from "react";
import classes from "./APIs.module.css";
import Fade from 'react-reveal/Fade';
import {AiFillCheckCircle} from 'react-icons/ai'

const APIs = () => {
  return (
    <section className={classes.Apis}>
      <div className={classes.left}>
        <h2>Experience unparalleled top notch customer service</h2>
        <p>
        Zed Cars stands out due to its commitment to excellence, offering a curated selection of high-quality vehicles, unparalleled customer service, and a passion for creating unforgettable automotive experiences.
        </p>

        <ul>
            <li><AiFillCheckCircle className={classes.check}/>Personalized Attention</li>
            <li><AiFillCheckCircle className={classes.check}/>Expert Guidance</li>
            <li><AiFillCheckCircle className={classes.check}/>After-Sales Support</li>
            <li><AiFillCheckCircle className={classes.check}/>Customer-Centric Approach</li>
        </ul>
      </div>
      <Fade right>
      <div className={classes.right}></div>
      </Fade>
    </section>
  );
};

export default APIs;
