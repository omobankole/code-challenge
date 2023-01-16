import classes from "./scoreboard2.module.css";
import { NavLink } from "react-router-dom";
import Back from "../../assets/images/back.png";
import Rank from "../../assets/images/rank.png";
import User from "../../assets/images/users.png";

const Scoreboard2 = () => {
  const body = [
    [1, "James Daniel"],
    [2, "James Daniel"],
    [3, "James Daniel"],
    [4, "James Daniel"],
    [5, "James Daniel"],
    [6, "James Daniel"],
    [7, "James Daniel"],
    [8, "James Daniel"],
    [9, "You"],
  ];

  return (
    <div className={classes.main}>
      {/* <header className={classes.topmain}>
      <nav>
        <NavLink
          to="/dashboard/challenge"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={Back} alt="back" />
          Back to challenge
        </NavLink>
      </nav>
      </header> */}
      <div className={classes.content}>
        <p>Number of Solves: 9</p>
        <table className={classes.table}>
          <tr>
            <th>
              <div className={classes.header}>
                <img src={Rank} alt="rank" />
                <span>Rank</span>
              </div>
            </th>
            <th>
              <div className={classes.header}>
                <img src={User} alt="user" />
                <span>Users</span>
              </div>
            </th>
          </tr>
          {body.map((row, i) => (
            <tr key={i}>
              {row.map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Scoreboard2;
