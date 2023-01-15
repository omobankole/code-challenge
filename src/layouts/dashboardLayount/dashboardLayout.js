import classes from "./dashboardLayout.module.css";
import { Outlet } from "react-router";
import Header from "../../components/ui/header/header";
import Notification from "../../components/notification/notification";
import { useState } from "react";

const DashboardLayout = () => {
  const [showNotify, setShowNotify] = useState(false);

  return (
    <div className={classes.main}>
      <Header setShowNotify={setShowNotify} />
      <div className={classes.content}>
          <Outlet />
        {showNotify && <Notification />}
      </div>
    </div>
  );
};

export default DashboardLayout;
