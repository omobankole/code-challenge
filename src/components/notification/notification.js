import classes from "./notification.module.css";
import { ReactComponent as Clear } from "../../assets/images/delete.svg";
import { ReactComponent as Notify } from "../../assets/images/smalll-bell.svg";
import { ReactComponent as NoBell } from "../../assets/images/No Bell.svg";
import { useEffect, useState } from "react";
import { deleteNot, notificationApi } from "../../services/api";


const Notification = ({ setShowNotify }) => {
  const [messages, setMessages] = useState([]);

  const getNotification = async () => {
    try {
      const response = await notificationApi();
      console.log(response);
      setMessages(response.data.notifications);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteMessage = async () => {
    try {
      const response = await deleteNot();
      console.log(response);
      setMessages([]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <div className={classes.main}>
      {messages.length < 1 ? (
        <div className={classes.noNotify}>
          <NoBell />
          <h3>No notifications yet</h3>
          <span onClick={() => setShowNotify()}>Ok</span>
        </div>
      ) : (
        <>
          <button className={classes.clear} onClick={deleteMessage}>
            Clear All
            <Clear />
          </button>
          <div className={classes.inboxScroll}>
            {messages.map((item, i) => (
              <div className={classes.inbox} key={i}>
                <span>
                  <Notify />
                </span>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
