import classes from "./passwordModal.module.css";
import ParentModal from "../parentModal";

const PasswordModal = ({ setModal }) => {
  return (
    <ParentModal setModal={setModal}>
      <div className={classes.main}>PasswordModal</div>
    </ParentModal>
  );
};

export default PasswordModal;
