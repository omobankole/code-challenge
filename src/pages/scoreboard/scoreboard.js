import React from "react";
import classes from '../scoreboard/scoreboard.module.css'
// import { ReactComponent as Rank } from '../../assets/images/rank.png'
import Rank from "../../assets/images/rank.png";
import User from "../../assets/images/users.png";
import Point from "../../assets/images/point.png";

const Scoreboard = () => {
  const Headers = [
    "Rank", "Users", "Point"
  ]
  const body = [
    [1, "James Daniel", "22 pts"],
    [2, "James Daniel", "22 pts"],
    [3, "James Daniel", "22 pts"],
    [4, "James Daniel", "22 pts"],
    [5, "James Daniel", "22 pts"],
    [6, "James Daniel", "22 pts"],
    [7, "James Daniel", "22 pts"],
    [8, "James Daniel", "22 pts"],
    [9, "James Daniel", "22 pts"],
  ]
  return (
    <div>
      <table className={classes.table}>
          <tr>
            
              <th>
                <div className={classes.header}>
                  <img src={Rank} alt="" /><span>Rank</span>
                </div>
              </th>
              <th>
              <div className={classes.header}>
                  <img src={User} alt="" /><span>Users</span>
                </div>
              </th>
              <th>
              <div className={classes.header}>
                  <img src={Point} alt="" /><span>Points</span>
                </div>
              </th>
            
          </tr>
          {body.map((row) => (
            <tr>
              {row.map((val) => (
                <td>
                  {val}
                </td>
              ))}
            </tr>
          ))}
       
      </table>
    </div>
  )
};

export default Scoreboard;
