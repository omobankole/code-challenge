import Card from "../../components/ui/card/card";
import { cardData } from "../../constants";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { question } from "../../services/api";

const Challenge = () => {
  const [cardData, setCardData] = useState([]);

  const getCardDetails = async () => {
    try {
      const response = await question();
      setCardData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCardDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.main}>
      <Link to="/dashboard/scoreboard2" className={classes.shuffle}>
        <Shuffle /> Pick Random
      </Link>
      <div className={classes.card}>
        {cardData.map((item, i) => (
          <Card
            {...item}
            key={i}
            index={i}
            setCardData={setCardData}
            cardData={cardData}
          />
        ))}
      </div>
    </div>
  );
};

export default Challenge;
