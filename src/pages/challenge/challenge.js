import Card from "../../components/ui/card/card";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";
import { useEffect, useState } from "react";
import { question, useApiSdk } from "../../services/api";
import useRefreshToken from "../../hooks/useRefreshToken";

const Challenge = () => {
  const apiSdk = useApiSdk();
  const [cardData, setCardData] = useState([]);
  const refresh = useRefreshToken();

  const getCardDetails = async () => {
    try {
      const response = await apiSdk.question();
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
