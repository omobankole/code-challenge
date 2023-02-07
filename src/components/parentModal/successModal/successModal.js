import classes from "./successModal.module.css";
import ParentModal from "../parentModal";
import { ReactComponent as Coin } from "../../../assets/images/coin.svg";

const SuccessModal = ({ setModal, cardData }) => {
  return (
    <ParentModal>
      <div className={classes.main}>
        <p className={classes.coin}>
          <Coin /> <span>+{cardData.weight}</span>
        </p>
        <p>
          Congratulations <br /> You just earned {cardData.weight} points for
          completing this challenge
        </p>
        <button onClick={() => setModal("")}>Claim</button>
      </div>
    </ParentModal>
  );
};

export default SuccessModal;
