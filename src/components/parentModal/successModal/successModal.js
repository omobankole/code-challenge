import classes from "./successModal.module.css";
import ParentModal from "../parentModal";
import { ReactComponent as Coin } from "../../../assets/images/coin.svg";
import { useNavigate } from "react-router";

const SuccessModal = ({ cardData }) => {
  const navigate = useNavigate();
  return (
    <ParentModal>
      <div
        className={`${classes.main} animate__animated animate__animated animate__jackInTheBox`}
      >
        <p className={classes.coin}>
          <Coin /> <span>+{cardData.weight}</span>
        </p>
        <p>
          Congratulations <br /> You just earned {cardData.weight} points for
          completing this challenge
        </p>
        <button onClick={() => navigate("/dashboard/scoreboard")}>Claim</button>
      </div>
    </ParentModal>
  );
};

export default SuccessModal;
