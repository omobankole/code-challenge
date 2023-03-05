import classes from "./parentModal.module.css";
import Close from "../../assets/images/close.svg";
import Back from "../../assets/images/back.svg";

const ParentModal = ({ children, setIsChoosen, showClose }) => {
  return (
    <div className={`${classes.modal} ${ !showClose && classes.fadeBg}`}>
      <main className={`${classes.box} ${!showClose && classes.boxTwo}`}>
        {showClose && (
          <button
            onClick={() => setIsChoosen(undefined)}
            className={classes.close}
          >
            <img src={Close} alt="close" />
            <img src={Back} alt="close" />
            <p>Back</p>
          </button>
        )}
        {children}
      </main>
    </div>
  );
};

export default ParentModal;
