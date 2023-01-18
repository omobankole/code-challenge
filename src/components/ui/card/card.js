import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { question } from "../../../services/api";
import QuestionModal from "../../parentModal/questionModal/questionModal";
import classes from "./card.module.css";

const Card = ({ category, name, cardData, index }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <QuestionModal setModal={setModal} cardData={cardData[index]} />
      )}
      <div className={classes.main} onClick={() => setModal(true)}>
        <p className={classes.complex}>
          {category === "H" ? "Hard" : category === "M" ? "Medium" : "Easy"}
        </p>
        <h3>{name}</h3>
        <p className={classes.answer}>{/* Answer: <span>{answer}</span> */}</p>
      </div>
    </>
  );
};

export default Card;
