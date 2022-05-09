import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { login } from "../services/AuthApi";
import "./Subscription.scss";

const Subscription = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // useEffect(() => {
  //   axios.get("http://localhost:3001/api/get").then((response) => {});
  //   //setIsAuth(true);
  //   console.log("isauth : " + isAuth);
  // }, [isAuth, username]);

  const submitUser = () => {
    axios
      .get("http://localhost:3001/api/get", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (!isAuth) {
          setIsAuth(false);
          console.log("créez un compte" + isAuth);
        }
        console.log(user);
        setIsAuth(true);
      });
  };

  const submitNewUser = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        username: user.username,
        password: user.password,
      })
      .then(() => {
        console.log("utilisateur créé");
      });
    setIsAuth(true);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
    console.log(name, value);
    console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(user);
    } catch ({ response }) {
      console.log(response);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="title">
          <legend className="id">Identifiez-vous</legend>

          <label>Nom d'utilisateur : </label>
          <input
            type="text"
            name="username"
            required
            onChange={handleChange}
            className="label"
            // onChange={(e) => {
            //   console.log("username : " + username);
            //   setUsername(e.target.value);
            // }}
          ></input>
          <label>Mot de passe : </label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
            className="label"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          ></input>
          <div className="buttonsContainer">
            {/* <Link to="/"> */}
            <button className="valid" onClick={submitUser}>
              Valider
            </button>
            {/* </Link> */}
            <Link to={"/"}>
              <button className="createAccount" onClick={submitNewUser}>
                Créer un compte
              </button>
            </Link>
          </div>
          {isAuth ? <div>Vous êtes identifié</div> : <div>Créez un compte</div>}
        </fieldset>
      </form>
    </div>
  );
};

export default Subscription;
