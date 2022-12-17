import classes from "./authLayout.module.css";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <main className={classes.main}>
      <div className={classes.imageBg}>
      </div>
      <div className={classes.children}>
          <Outlet />
      </div>
    </main>
  );
};

export default Auth;
