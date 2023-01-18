import { useState } from "react";
import ParentModal from "../parentModal";
import classes from "./questionModal.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

const QuestionModal = ({ setModal, cardData }) => {
  const [payload, setPayload] = useState({
    answer: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
  };
  const code = `console.log('my name is fola')
    const handleSubmit = () =>{
            setLoading(true)
    }
    `;

  const handleData = () => {};

  return (
    <ParentModal setModal={setModal}>
      <form className={classes.main}>
        <p>{cardData.title}</p>
        <p>{cardData.description}</p>
        {/* <ul>
          <li>Declare the variable name.</li>
        </ul> */}
        {cardData.question_type === "Code" && (
          <div className={classes.code}>
            <SyntaxHighlighter
              children={code}
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
      </form>
    </ParentModal>
  );
};

export default QuestionModal;
