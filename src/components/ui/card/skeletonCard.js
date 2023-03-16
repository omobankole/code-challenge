import classes from "./card.module.css";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ isLoading }) => {
  return (
    <div className={`${classes.main} ${isLoading && classes.skeleton}`}>
      <p className={classes.complex}>
        <Skeleton width={70} duration={1} />
      </p>
      <h3>
        <Skeleton width={`100%`} duration={1} />
      </h3>
      <p className={classes.answer}>{/* Answer: <span>{answer}</span> */}</p>
    </div>
  );
};

export default SkeletonCard;
