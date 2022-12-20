import classes from "./parentModal.module.css";
import Close from "../../assets/images/close.svg";

const ParentModal = ({ children, setModal }) => {

  return (
    <div className={classes.modal}>
      <main className={classes.box}>
        <button onClick={() => setModal(false)} className={classes.close}>
          <img src={Close} alt="close" />
        </button>
        {children}
      </main>
    </div>
  );
};

export default ParentModal;
