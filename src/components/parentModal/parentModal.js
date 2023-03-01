import classes from "./parentModal.module.css";
import Close from "../../assets/images/close.svg";

const ParentModal = ({ children, setIsChoosen, showClose }) => {
  return (
    <div className={classes.modal}>
      <main className={classes.box}>
        {showClose && (
          <button
            onClick={() => setIsChoosen(undefined)}
            className={classes.close}
          >
            <img src={Close} alt="close" />
          </button>
        )}
        {children}
      </main>
    </div>
  );
};

export default ParentModal;
