import { useState } from "react";
import ErrorModal from "../../parentModal/errorModal/errorModal";
import SuccessModal from "../../parentModal/successModal/successModal";
import QuestionModal from "../../parentModal/questionModal/questionModal";
import Check from "../../../assets/images/check.svg";
import classes from "./card.module.css";

const Card = ({
  category,
  name,
  cardData,
  index,
  is_solved,
  setIsChoosen,
  isChoosen,
  id,
}) => {
  const [modal, setModal] = useState("");
  const [answerResp, setAnswerResp] = useState({});

  const handleSelect = () => {
    setModal("question");
    console.log(id);
    setIsChoosen(id);
  };

  return (
    <>
      {isChoosen === id && (
        <QuestionModal
          setIsChoosen={setIsChoosen}
          setModal={setModal}
          cardData={cardData[index]}
          answerResp={answerResp}
          setAnswerResp={setAnswerResp}
        />
      )}
      {modal === "answer" && (
        <SuccessModal setModal={setModal} cardData={cardData[index]} />
      )}

      {modal === "error" && (
        <ErrorModal
          setModal={setModal}
          cardData={cardData[index]}
          answerResp={answerResp}
        />
      )}

      <div
        className={`${classes.main} ${is_solved && classes.blueBg}`}
        onClick={handleSelect}
      >
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
