import Card from "../../components/ui/card/card";
import { cardData } from "../../constants";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";
import QuestionModal from "../../components/parentModal/questionModal/questionModal";
import { useState } from "react";

const Challenge = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className={classes.main}>
      <button className={classes.shuffle}>
        <Shuffle /> Pick Random
      </button>
      <div className={classes.card}>
        {cardData.map((item, i) => (
          <Card {...item} key={i} setModal={setModal} />
        ))}
        {modal && <QuestionModal setModal={setModal} />}
      </div>
    </div>
  );
};

export default Challenge;
