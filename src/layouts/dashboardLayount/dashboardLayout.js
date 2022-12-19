import classes from "./dashboardLayout.module.css";
import { Outlet } from "react-router";
import Header from "../../components/ui/header/header";
import PasswordModal from "../../components/parentModal/passwordModal/passwordModal";
import { useState } from "react";

const DashboardLayout = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.content}>
        <Outlet />
        {modal && <PasswordModal setModal={setModal} />}
        <button onClick={() => setModal(true)}>open</button>
      </div>
    </div>
  );
};

export default DashboardLayout;
