import { NavLink } from "react-router-dom";
import s from "./UserClick.module.css";

export const UserClick = () => {
  return (
    <div className={s.containerU}>
      <div className={s.title_container}>
        <h4>Jaydon Frankie</h4>
        <p>demo@minimals.cc</p>
      </div>
      <div className={s.lists_container}>
        <NavLink to="/" className={s.list}>
          <p>Home</p>
        </NavLink>
        <NavLink to="/" className={s.list}>
          <p>Profile</p>
        </NavLink>
        <NavLink to="/" className={s.list}>
          <p>Settings</p>
        </NavLink>
      </div>
      <div className={s.footer_container}>
        <NavLink to="/" className={s.footer}>
          <p>Logout</p>
        </NavLink>
      </div>
    </div>
  );
};
