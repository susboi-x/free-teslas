import React from "react";
import classes from "./Footer.module.css";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={classes["footer-item"]}>
        <h2>Contact</h2>
        <a className={classes.link} href="#">ZedCars.com</a>
        <div className={classes.icons}>
          <a target="blank" href="https://www.instagram.com/zedcarsltd?igsh=YzVkODRmOTdmMw%3D%3D&utm_source=qr" className={classes.icon}>
            <AiFillFacebook />
          </a>
          <a target="blank" href="https://www.instagram.com/zedcarsltd?igsh=YzVkODRmOTdmMw%3D%3D&utm_source=qr" className={classes.icon}>
            <AiOutlineTwitter />
          </a>
          <a target="blank" href="https://www.instagram.com/zedcarsltd?igsh=YzVkODRmOTdmMw%3D%3D&utm_source=qr" className={classes.icon}>
            <AiOutlineInstagram />
          </a>
          <a target="blank" href="#" className={classes.icon}>
            <FaWhatsapp />
          </a>
          <a target="blank" href="#" className={classes.icon}>
            <AiFillLinkedin />
          </a>
        </div>
      </div> 
      <div className={classes["footer-item"]}>
        <h2>Texas</h2>
        <p>1025 Highway 6 North,<br />  Houston,<br /> TX 77079<br /> United States</p>
      </div>
      <div className={classes["footer-item"]}>
        <h2>San Fransisco</h2>
        <p>
          354 Oyster Point Blvd.,<br /> South San Francisco,<br /> CA 94080<br /> United States
        </p>
      </div>
      <div className={classes["footer-item"]}>
        <h2>Cape Town</h2>
        <p>
           186 Loop St, Cape Town City<br /> Centre,<br />
          Cape Town, 8001,<br /> South Africa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
