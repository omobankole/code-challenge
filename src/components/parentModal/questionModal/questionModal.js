import { useState } from "react";
import ParentModal from "../parentModal";
import classes from "./questionModal.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { answer } from "../../../services/api";
import { Link } from "react-router-dom";

const QuestionModal = ({ setModal, cardData, answerResp, setAnswerResp }) => {
  const [payload, setPayload] = useState({
    answer: "",
  });
  const id = cardData.id;
  console.log(id)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    try {
      const response = await answer(id, payload);
      setAnswerResp(response.data);
      if (answerResp.status === false) {
        console.log("Yeeeh");
        setModal("error");
      } else if (answerResp.status === true) {
        console.log("ooops");
        setModal("answer");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(status);
  return (
    <ParentModal setModal={setModal}>
      <form className={classes.main}>
        <div>
          <p>{cardData.description}</p>
          {cardData.question_type === "Code" && (
            <div className={classes.code}>
              <SyntaxHighlighter
                children={cardData.code}
                language="javascript"
                showLineNumbers={true}
                style={coldarkCold}
              />
            </div>
          )}
          <input
            type="text"
            placeholder={`Hints ${cardData.encoded}`}
            name="answer"
            value={payload.answer}
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <div className={classes.button}>
            <button onClick={handleSubmit}>Submit</button>
            <Link to={`/dashboard/scoreboard/game/${id}`}>Solve</Link>
          </div>
        </div>
      </form>
    </ParentModal>
  );
};

export default QuestionModal;
