import classes from "./notification.module.css";
import { ReactComponent as Clear } from "../../assets/images/delete.svg";
import { ReactComponent as Notify } from "../../assets/images/smalll-bell.svg";

const notificationData = [
  {
    message: "You have gained 10 points for melody challenge Total Points:40",
  },
  {
    message: "You have gained 10 points for melody challenge Total Points:40",
  },
  {
    message: "You have gained 10 points for melody challenge Total Points:40",
  },
  {
    message: "You have gained 10 points for melody challenge Total Points:40",
  },
];

const Notification = () => {
  return (
    <div className={classes.main}>
      <button className={classes.clear}>
        Clear All
        <Clear />
      </button>
      {notificationData.map((item, i) => (
        <div className={classes.inbox} key={i}>
          <span>
            <Notify />
          </span>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
