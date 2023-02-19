import { useState } from "react";
import ParentModal from "../parentModal";
import classes from "./questionModal.module.css";
import { ReactComponent as Download } from "../../../assets/images/download.svg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { answer } from "../../../services/api";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const QuestionModal = ({ setModal, cardData, answerResp, setAnswerResp }) => {
  const [payload, setPayload] = useState({
    answer: "",
  });

  const id = cardData.id;
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    try {
      const response = await answer(id, payload);
      setAnswerResp(response.data);
      console.log(response.data);
      if (!answerResp.status) {
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

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(cardData.description),
  });
  // console.log(status);
  return (
    <ParentModal setModal={setModal}>
      <form className={classes.main}>
        <div>
          <p dangerouslySetInnerHTML={sanitizedData()} />

          {cardData.question_type === "Downloadable" && (
            <a
              href={cardData.file}
              target="_blank"
              className={classes.download}
              download
            >
              <Download /> {cardData.file.split("/").splice(-1)}
            </a>
          )}

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
            {/* <Link to={`/dashboard/scoreboard/game/${id}`}>Solve</Link> */}
          </div>
        </div>
      </form>
    </ParentModal>
  );
};

export default QuestionModal;
