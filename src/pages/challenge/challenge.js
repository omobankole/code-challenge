import Card from "../../components/ui/card/card";
import { cardData } from "../../constants";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";
import QuestionModal from "../../components/parentModal/questionModal/questionModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Challenge = () => {
  const [cardData, setCardData] = useState([{}]);
  console.log(cardData);
  const [modal, setModal] = useState(false);
  return (
    <div className={classes.main}>
      <Link to="/dashboard/scoreboard2" className={classes.shuffle}>
        <Shuffle /> Pick Random
      </Link>
      <div className={classes.card}>
        {cardData.map((item, i) => (
          <Card
            {...item}
            key={i}
            setModal={setModal}
            setCardData={setCardData}
            cardData={cardData}
          />
        ))}
        {modal && (
          <QuestionModal setModal={setModal} cardData={cardData} />
        )}
      </div>
    </div>
  );
};

export default Challenge;
