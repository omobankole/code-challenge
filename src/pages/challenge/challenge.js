import Card from "../../components/ui/card/card";
import classes from "./challenge.module.css";
import { ReactComponent as Shuffle } from "../../assets/images/shuffle.svg";
import { useEffect, useState } from "react";
import { useApiSdk } from "../../services/api";
import SkeletonCard from "../../components/ui/card/skeletonCard";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useQuery } from "react-query";

const Challenge = () => {
  const apiSdk = useApiSdk();
  const width = useMediaQuery();
  const [isChoosen, setIsChoosen] = useState();
  const { isLoading, data, isFetching } = useQuery("challlenge", () => apiSdk.question());
  const cardData = data?.data.results;
  console.log(cardData);
  console.log({isLoading, isFetching})

  const showRandom = () => {
    const random = Math.ceil(Math.random() * cardData.length);
    console.log(random);
    setIsChoosen(random);
  };

  return (
    <div className={classes.main}>
      <button className={classes.shuffle} onClick={showRandom}>
        <Shuffle />
        {width > 768 ? "Pick Random" : "Shuffle"}
      </button>
      <div className={classes.card}>
        {isLoading ? (
          <>
            {Array(6)
              .fill(undefined)
              .map((item, i) => (
                <SkeletonCard {...item} isLoading={isLoading} key={i} index={i} />
              ))}
          </>
        ) : (
          <>
            {cardData.map((item, i) => (
              <Card
                {...item}
                key={i}
                index={i}
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
