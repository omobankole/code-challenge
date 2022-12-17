import classes from "./dashboardLayout.module.css";
import { Outlet } from "react-router";
import Header from "../../components/ui/header/header";

const DashboardLayout = () => {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
