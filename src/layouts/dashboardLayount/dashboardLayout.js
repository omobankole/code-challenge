import classes from "./dashboardLayout.module.css";
import { Outlet } from "react-router";
import Header from "../../components/ui/header/header";
import Notification from "../../components/notification/notification";
import { useState, useEffect } from "react";

const DashboardLayout = () => {
  const [showNotify, setShowNotify] = useState(false);
  // useEffect(() => {
  //   document.body.removeEventListener("click", () => {
  //     setShowNotify(false);
  //   });
  // });

  return (
    <div className={classes.main}>
      <Header setShowNotify={setShowNotify} />
      <div className={classes.content}>
        <Outlet />
        {showNotify && <Notification setShowNotify={setShowNotify} />}
      </div>
    </div>
  );
};

export default DashboardLayout;
