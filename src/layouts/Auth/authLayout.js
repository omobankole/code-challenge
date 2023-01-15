import classes from "./authLayout.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import PasswordModal from "../../components/parentModal/passwordModal/passwordModal";

const Auth = () => {
  return (
    <main className={classes.main}>
      <div className={classes.imageBg}></div>
      <div className={classes.children}>
        <Outlet />
      </div>
    </main>
  );
};

export default Auth;
