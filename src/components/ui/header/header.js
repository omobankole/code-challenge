import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Question } from "../../../assets/images/challenge.svg";
import { ReactComponent as Score } from "../../../assets/images/score.svg";
import { ReactComponent as Bell } from "../../../assets/images/bell.svg";
import { ReactComponent as Hamburger } from "../../../assets/images/hamburger.svg";
import { ReactComponent as Cancel } from "../../../assets/images/cancel.svg";
import { useState } from "react";

const Header = ({ setShowNotify }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={classes.main}>
      <button className={classes.hamburger} onClick={() => setShowNav(true)}>
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
      <button
        className={classes.btn}
        onClick={() => setShowNotify((prev) => !prev)}
      >
        <Bell className={classes.bell} />
        <p>Notification</p>
      </button>
    </header>
  );
};

export default Header;
