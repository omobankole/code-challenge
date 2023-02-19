import { useState } from "react";
import ErrorModal from "../../parentModal/errorModal/errorModal";
import SuccessModal from "../../parentModal/successModal/successModal";
import QuestionModal from "../../parentModal/questionModal/questionModal";
import Check from "../../../assets/images/check.svg";
import classes from "./card.module.css";

const Card = ({ category, name, cardData, index, is_solved }) => {
  const [modal, setModal] = useState("");
  const [answerResp, setAnswerResp] = useState({});

  return (
    <>
      {modal === "question" && (
        <QuestionModal
          setModal={setModal}
          cardData={cardData[index]}
          answerResp={answerResp}
          setAnswerResp={setAnswerResp}
        />
      )}
      {modal === "answer" && answerResp.status && (
        <SuccessModal setModal={setModal} cardData={cardData[index]} />
      )}
      {modal === "error" && !answerResp.status && (
        <ErrorModal
          setModal={setModal}
          cardData={cardData[index]}
          answerResp={answerResp}
        />
      )}

      <div className={classes.main} onClick={() => setModal("question")}>
        <p className={classes.complex}>
          {category === "H" ? "Hard" : category === "M" ? "Medium" : "Easy"}
        </p>
        <h3>{name}</h3>
        <p className={classes.answer}>{/* Answer: <span>{answer}</span> */}</p>
        {is_solved && <img src={Check} alt="check" />}
      </div>
    </>
  );
};

export default Card;
