import React from "react";
import { Link } from "react-router-dom";
import "../ButtonDownload/BtnDownload.scss";

const BtnDownload = (props) => {
    return (
        <a href={props.href} className="download__button-link" download>
          Download Resume
          <svg
            className="arrow-circle-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <g
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            >
              <circle
                className="arrow-circle-iconcircle"
                cx="16"
                cy="16"
                r="15.12"
              ></circle>
              <path
                className="arrow-circle-icon--arrow"
                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
              ></path>
            </g>
          </svg>
        </a>
    )
}

export default BtnDownload;