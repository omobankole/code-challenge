import Card from "../../components/ui/card/card";
import { cardData } from "../../constants";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";

const Challenge = () => {
  return (
    <div className={classes.main}>
      <button className={classes.shuffle}>
        <Shuffle /> Pick Random
      </button>
      <div className={classes.card}>
        {cardData.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Challenge;
