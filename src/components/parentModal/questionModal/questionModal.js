import { useState } from "react";
import ParentModal from "../parentModal";
import classes from "./questionModal.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { answer } from "../../../services/api";

const QuestionModal = ({ setModal, cardData, status, setStatus }) => {
  const [payload, setPayload] = useState({
    answer: "",
  });
  const id = cardData.id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    try {
      const response = await answer(id, payload);
      setStatus(response.data);
      console.log(response.data);
      if (!status.status) {
        console.log("Yeeeh");
        setModal("error");
      } else {
        console.log("ooops");
        setModal("answer");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(status);
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
            placeholder="What is your name?"
            name="answer"
            value={payload.answer}
            onChange={(e) =>
              setPayload((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <div className={classes.btn}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
    </ParentModal>
  );
};

export default QuestionModal;
