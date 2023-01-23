import classes from "./errorModal.module.css";
import { ReactComponent as Error } from "../../../assets/images/error.svg";
import ParentModal from "../parentModal";

const ErrorModal = ({ setModal, status }) => {
  return (
    <ParentModal>
      <div className={classes.main}>
        <Error />
        <p>
          Oops!! <br /> {status.message}
        </p>
        <button onClick={() => setModal("question")}>Try Again</button>
      </div>
    </ParentModal>
  );
};

export default ErrorModal;
