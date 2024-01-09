import React from "react";


function Info({icon,title,data,link}) {
  return (
    <div className="contact__info">
      <div className="contact__card">
        <i className={icon}></i>
        <h3 className="contact__card-title">{title}</h3>
        <span className="contact__card-data">{data}</span>
        <a href={link} className="contact__button">
          write to me
          <i class="bx bx-right-arrow-alt contact__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Info;
