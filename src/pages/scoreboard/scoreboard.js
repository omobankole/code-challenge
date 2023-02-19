import React, { useEffect, useState } from "react";
import classes from "../scoreboard/scoreboard.module.css";
// import { ReactComponent as Rank } from '../../assets/images/rank.png'
import Rank from "../../assets/images/rank.png";
import User from "../../assets/images/users.png";
import Point from "../../assets/images/point.png";
import { useApiSdk, user } from "../../services/api";

const Scoreboard = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const sdk = useApiSdk();

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await sdk.user();
      setUsers(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const body = [];
  users.forEach((user, index) =>
    body.push([index + 1, user.username, `${user.user_score} pts`])
  );

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <table className={classes.table}>
            <thead>
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
                <th>
                  <div className={classes.header}>
                    <img src={Point} alt="point" />
                    <span>Points</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {body.map((row, index) => (
                <tr key={index + 1}>
                  {row.map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Scoreboard;
