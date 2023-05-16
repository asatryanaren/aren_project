import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className={s.layout_div}>
        <Header />
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
