import React, { useEffect, useState } from "react";
import classes from "../scoreboard/scoreboard.module.css";
// import { ReactComponent as Rank } from '../../assets/images/rank.png'
import Rank from "../../assets/images/rank.svg";
import User from "../../assets/images/user.svg";
import Point from "../../assets/images/point.svg";
import { useApiSdk, user } from "../../services/api";
import Skeleton from "react-loading-skeleton";

const Scoreboard = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const newName = localStorage.getItem("username");
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
    body.push([index + 1, user.username === newName ? "You" : user.username, `${user.user_score} pts`])
  );

  return (
    <>
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
            {loading && loading ? (
              <>
                {Array(5)
                  .fill(undefined)
                  .map((row, index) => (
                    <tr key={index + 1}>
                      {Array(3)
                        .fill()
                        .map((val, i) => (
                          <td key={i}>
                            <Skeleton width={`60%`} duration={1} val={val} />
                          </td>
                        ))}
                    </tr>
                  ))}
              </>
            ) : (
              <>
                {body.map((row, index) => (
                  <tr key={index + 1}>
                    {row.map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Scoreboard;
