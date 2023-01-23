import { useState } from "react";
import ErrorModal from "../../parentModal/errorModal/errorModal";
import SuccessModal from "../../parentModal/successModal/successModal";
import QuestionModal from "../../parentModal/questionModal/questionModal";
import classes from "./card.module.css";

const Card = ({ category, name, cardData, index }) => {
  const [modal, setModal] = useState("");
  const [status, setStatus] = useState({});

  return (
    <>
      {modal === "question" && (
        <QuestionModal
          setModal={setModal}
          cardData={cardData[index]}
          status={status}
          setStatus={setStatus}
        />
      )}
      {modal === "answer" && (
        <SuccessModal
          setModal={setModal}
          cardData={cardData[index]}
          status={status}
        />
      )}
      {modal === "error" && (
        <ErrorModal
          setModal={setModal}
          cardData={cardData[index]}
          status={status}
        />
      )}
      <div className={classes.main} onClick={() => setModal("question")}>
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
