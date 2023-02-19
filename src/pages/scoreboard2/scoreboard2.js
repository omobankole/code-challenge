import classes from "./scoreboard2.module.css";
import Rank from "../../assets/images/rank.png";
import User from "../../assets/images/users.png";
import { solves, useApiSdk } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Scoreboard2 = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const newName = localStorage.getItem("username");

  const sdk = useApiSdk();

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await sdk.solves(id);
      // console.log(response)
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);

  const data = [];
  users.forEach((user, index) =>
    data.push([
      index + 1,
      user.user.username === newName ? "you" : user.user.username,
    ])
  );

  // const data = [
  //   [1, "James Daniel"],
  //   [2, "James Daniel"],
  //   [3, "James Daniel"],
  //   [4, "James Daniel"],
  //   [5, "James Daniel"],
  //   [6, "James Daniel"],
  //   [7, "James Daniel"],
  //   [8, "James Daniel"],
  //   [9, "You"],
  // ];

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <p>Number of Solves: {users.length}</p>
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
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {row.map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard2;
