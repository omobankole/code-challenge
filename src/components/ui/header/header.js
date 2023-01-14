import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Question } from "../../../assets/images/challenge.svg";
import { ReactComponent as Score } from "../../../assets/images/score.svg";
import { ReactComponent as Bell } from "../../../assets/images/bell.svg";
const Header = ({ setShowNotify }) => {
  return (
    <header className={classes.main}>
      <nav>
        <NavLink
          to="/dashboard/challenge"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <Question />
          Challenge
        </NavLink>
        <NavLink
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
        Notification
      </button>
    </header>
  );
};

export default Header;
