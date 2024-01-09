import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Thilini Athukorala</h1>
        <div className="footer__social">
        <a href="" className="footer__social-link">
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="" className="footer__social-link">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/Isuru-Sandaruwan-Kumarasiri"
          className="footer__social-link"
        >
          <i class="bx bxl-github"></i>
        </a>
      </div>
      <span className="footer__copy">&#169;Isu.com. All rights reserved</span>
      </div>
      
    </footer>
  );
}

export default Footer;
