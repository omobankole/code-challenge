import { Link } from "react-router-dom";
import classes from "./card.module.css";

const Card = ({ complex, user, answer, setModal }) => {
  return (
    <div className={classes.main} onClick={() => setModal(true)}>
      <p className={classes.complex}>{complex}</p>
      <h3>{user}</h3>
      <p className={classes.answer}>
        Answer: <span>{answer}</span>
      </p>
    </div>
  );
};

export default Card;
