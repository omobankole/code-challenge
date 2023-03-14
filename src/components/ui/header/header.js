import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Question } from "../../../assets/images/challenge.svg";
import { ReactComponent as Score } from "../../../assets/images/score.svg";
import { ReactComponent as Bell } from "../../../assets/images/bell.svg";
import { ReactComponent as Hamburger } from "../../../assets/images/hamburger.svg";
import { ReactComponent as Cancel } from "../../../assets/images/cancel.svg";
import { useState } from "react";

const Header = ({ setShowNotify, showNotify }) => {
  const userName = localStorage.getItem("username");
  const newUser = userName[0]
  const [showNav, setShowNav] = useState(false);
  const handleOpen = () => {
    setShowNotify(false);
    setShowNav(true);
  };

  return (
    <header>
      <div className={classes.main}>
        <button className={classes.hamburger} onClick={handleOpen}>
          <Hamburger />
        </button>
        <nav className={`${classes.nav} ${showNav && classes.anime}`}>
          <button onClick={() => setShowNav(false)}>
            <Cancel />
          </button>
          <NavLink
            onClick={() => setShowNav(false)}
            to="/dashboard/challenge"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <Question />
            Challenge
          </NavLink>
          <NavLink
            onClick={() => setShowNav(false)}
            to="/dashboard/scoreboard"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <Score />
            Scoreboard
          </NavLink>
        </nav>
        <div className={classes.userLogo}>
          <button
            className={`${classes.btn} ${showNotify && classes.btnActive}`}
            onClick={() => setShowNotify((prev) => !prev)}
          >
            <Bell className={classes.bell} />
            <p>Notification</p>
          </button>
          <p className={classes.username}>{newUser}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
