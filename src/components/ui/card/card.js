import { useEffect } from "react";
import { Link } from "react-router-dom";
import { question } from "../../../services/api";
import classes from "./card.module.css";

const Card = ({ category, name, answer, setModal, setCardData, cardData }) => {
  useEffect(() => {
    const getCardDetails = async () => {
      try {
        const response = await question();
        setCardData(response.data.results);
        console.log(cardData);
      } catch (error) {
        console.log(error);
      }
    };
    getCardDetails();
  }, []);

  return (
    <div className={classes.main} onClick={() => setModal(true)}>
      <p className={classes.complex}>
        {category === "H" ? "Hard" : category === "M" ? "Medium" : "Easy"}
      </p>
      <h3>{name}</h3>
      <p className={classes.answer}>{/* Answer: <span>{answer}</span> */}</p>
    </div>
  );
};

export default Card;
