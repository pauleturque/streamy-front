import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MovieIcon from "@mui/icons-material/Movie";
import Auth from "../contexts/Auth";
import { logout } from "../services/AuthApi";

function Nav() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  const [navBarBlack, setNavBarBlack] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const handleClickUser = () => {
    popUp ? setPopUp(false) : setPopUp(true);
  };

  const transitionNavBar = () => {
    window.scrollY > 10 ? setNavBarBlack(true) : setNavBarBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNavBar);
  });

  console.log("auth : " + isAuthenticated);

  return (
    <div className={`nav  ${navBarBlack}`}>
      <p className="brand">STREAMY</p>
      {(!isAuthenticated && (
        <>
          <Link to={"/auth"}>
            <AccountCircleIcon fontSize="large" />
            {}
          </Link>
        </>
      )) || (
        <>
          <Link to={"/films"}>
            <button className="nav__" onClick={handleClickUser}>
              <MovieIcon fontSize="large" />
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Nav;
