import React from "react";
import "./QuickView.scss";
import CancelIcon from "@mui/icons-material/Cancel";

function QuickView({ popUp, popUpStatus }) {
  console.log(popUp);
  return (
    <div className={`quickView ${popUpStatus && "open"}`}>
      coucou
      <div
        className="quickView__banner"
        style={{ backgroundImage: "./images/Netflix_2015_logo.svg" }}
      >
        <div className="quickView__content">
          <h3 className="quickView__title">titre</h3>
          <p>bla bla</p>
        </div>
        <button className="quickView__close" onClick={popUp}>
          <CancelIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default QuickView;
