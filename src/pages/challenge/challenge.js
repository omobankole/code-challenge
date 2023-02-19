import Card from "../../components/ui/card/card";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";
import { useEffect, useState } from "react";
import { question } from "../../services/api";

const Challenge = () => {
  const [cardData, setCardData] = useState([]);

  const [isChoosen, setIsChoosen] = useState({});

  const getCardDetails = async () => {
    try {
      const response = await question();
      setCardData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // setIsChoosen(cardData[index]);

  useEffect(() => {
    getCardDetails();
    // eslint-disable-next-line
  }, []);

  const showRandom = () => {
    setIsChoosen(cardData[Math.floor(Math.random() * cardData.length)]);
  };
  return (
    <div className={classes.main}>
      <button className={classes.shuffle}>
        <Shuffle /> Pick Random
      </button>
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
