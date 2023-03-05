import classes from "./errorModal.module.css";
import { ReactComponent as Error } from "../../../assets/images/error.svg";
import ParentModal from "../parentModal";

const ErrorModal = ({ setModal, answerResp }) => {
  return (
    <ParentModal>
      <div
        className={`${classes.main} animate__animated animate__animated animate__jackInTheBox`}
      >
        <Error />
        <p>
          Oops!! <br /> {answerResp.message}
        </p>
        <button onClick={() => setModal("question")}>Try Again</button>
      </div>
    </ParentModal>
  );
};

export default ErrorModal;
