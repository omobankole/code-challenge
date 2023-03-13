import Card from "../../components/ui/card/card";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";
import { useEffect, useState } from "react";
import { useApiSdk } from "../../services/api";
import SkeletonCard from "../../components/ui/card/skeletonCard";

const Challenge = () => {
  const apiSdk = useApiSdk();
  const [cardData, setCardData] = useState([]);
  const [isChoosen, setIsChoosen] = useState();
  const [loading, setLoading] = useState(false);

  const getCardDetails = async () => {
    try {
      setLoading(true);
      const response = await apiSdk.question();
      setCardData(response.data.results);
      console.log(response.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCardDetails();
    // eslint-disable-next-line
  }, []);

  const showRandom = () => {
    const random = Math.ceil(Math.random() * cardData.length);
    console.log(random);
    setIsChoosen(random);
  };

  return (
    <div className={classes.main}>
      <button className={classes.shuffle} onClick={showRandom}>
        <Shuffle /> Pick Random
      </button>
      <div className={classes.card}>
        {loading ? (
          <>
            {Array(6)
              .fill(undefined)
              .map((item, i) => (
                <SkeletonCard {...item} loading={loading} key={i} index={i} />
              ))}
          </>
        ) : (
          <>
            {cardData.map((item, i) => (
              <Card
                {...item}
                key={i}
                index={i}
                setCardData={setCardData}
                cardData={cardData}
                setIsChoosen={setIsChoosen}
                isChoosen={isChoosen}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Challenge;
