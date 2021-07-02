import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer({centers}) {
  return (
    <div className={centers && centers.length === 0 ? "footer" : "footer-responsive"}>
          <a href="https://mohdmustafa.netlify.app/"><h5>Developer</h5></a>
    </div>
  );
}

export default Footer;
