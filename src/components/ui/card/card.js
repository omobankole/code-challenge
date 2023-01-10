import classes from "./card.module.css";

const Card = ({ complex, user, answer }) => {
  return (
    <div className={classes.main}>
      <p className={classes.complex}>{complex}</p>
      <h3>{user}</h3>
      <p className={classes.answer}>
        Answer: <span>{answer}</span>
      </p>
    </div>
  );
};

export default Card;
