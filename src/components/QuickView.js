import React from "react";
import "./QuickView.scss";
import CancelIcon from "@mui/icons-material/Cancel";

function QuickView({ bannerStyle, popUp, popUpStatus, movie }) {
  console.log(popUp);
  return (
    <div className={`quickView ${popUpStatus && "open"}`}>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickView__content">
          <h3 className="quickView__title">
            {movie?.title || movie?.original_title || movie?.name}
          </h3>
          <p>{movie?.overview}</p>
        </div>
        <button className="quickView__close" onClick={popUp}>
          <CancelIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default QuickView;
