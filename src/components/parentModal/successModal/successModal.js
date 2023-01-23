import classes from "./successModal.module.css";
import ParentModal from "../parentModal";
import { ReactComponent as Coin } from "../../../assets/images/coin.svg";

const SuccessModal = ({ setModal }) => {
  return (
    <ParentModal>
      <div className={classes.main}>
        <Coin />
        <p>
          Congratulations <br /> You just earned 10 points for completing this
          challenge
        </p>
        <button onClick={() => setModal("")}>Claim</button>
      </div>
    </ParentModal>
  );
};

export default SuccessModal;
