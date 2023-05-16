import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdDoNotDisturbAlt } from "react-icons/md";

import { SlBasket, SlUser } from "react-icons/sl";
import { TbBrandBlogger } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
import s from "./Sidebar.module.css";
import PieChart from "../Pages/DashBoard/Charts/PieChart";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBurgerState,
  burgerShow,
  showDownHeader,
  showBell,
  showUser,
} from "../../features/headerSlice";
import { filter } from "../../features/ProductSlice";

const Sidebar = () => {
  const showState = useSelector(selectBurgerState);
  const dispatch = useDispatch();
  window.addEventListener("click", () => {
    dispatch(burgerShow(false));
  });

  return (
    <div
      className={showState ? s.sidebar_show : s.sidebar}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(filter(false));
        dispatch(showDownHeader(false));
        dispatch(showBell(false));
        dispatch(showUser(false));
      }}
    >
      <div className={s.header_sidebar}>
        <img src="./images/avatar.jpg" />
        <h4>Jaydon Frankie</h4>
      </div>
      <div className={s.body_sidebar}>
        <NavLink to="/" className={s.link}>
          <MdOutlineDashboard />
          Dashboard
        </NavLink>
        <NavLink to="user" className={s.link}>
          <SlUser />
          User
        </NavLink>
        <NavLink to="product" className={s.link}>
          <SlBasket />
          Product
        </NavLink>
        <NavLink to="blog" className={s.link}>
          <TbBrandBlogger />
          Blog
        </NavLink>
        <NavLink to="/login" className={s.link}>
          <FiLogIn />
          Login
        </NavLink>
        <NavLink to="/notfound" className={s.link}>
          <MdDoNotDisturbAlt />
          Not Found
        </NavLink>
      </div>
      <div className={s.pieChart}>
        <PieChart />
      </div>
    </div>
  );
};
export default Sidebar;
