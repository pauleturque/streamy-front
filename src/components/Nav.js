import React from "react";
import { useState } from "react";
import "./Nav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function Nav() {
  const [navBarBlack, setNavBarBlack] = useState(false);
  const [toggle, setToggle] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 10 ? setNavBarBlack(true) : setNavBarBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNavBar);
  });

  const handleClick = () => {
    console.log(toggle);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div
      className={`nav  ${navBarBlack || (toggle && "nav--black")} ${
        toggle && "show"
      }`}
    >
      <button className="nav__" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img
        src="./images/Netflix_2015_logo.svg"
        className="nav__logo"
        alt="Netflix"
      ></img>
      <nav className="nav__links">
        <a href="/" className="nav__link">
          {" "}
          Accueil
        </a>
        <a href="/" className="nav__link">
          {" "}
          Séries
        </a>
        <a href="/" className="nav__link">
          {" "}
          Films
        </a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          <LiveTvIcon />
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsNoneIcon />
        </a>
        <a href="/" className="nav__action">
          <img
            src="./images/profile-icon.jpg"
            alt="avatar"
            className="profile__pic"
          />
        </a>
      </div>
    </div>
  );
}

export default Nav;
