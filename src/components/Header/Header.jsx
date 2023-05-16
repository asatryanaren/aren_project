import { ImBell, ImSearch } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBellState,
  selectDownHeaderState,
  selectMessageCountState,
  selectUserState,
  showBell,
  showDownHeader,
  showUser,
  burgerShow,
} from "../../features/headerSlice";
import BellClick from "../openWindow/BellClick";
import { UserClick } from "../openWindow/UserClick";
import { filter } from "../../features/ProductSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showBellState = useSelector(selectBellState);
  const showHeader = useSelector(selectDownHeaderState);
  const showUserState = useSelector(selectUserState);
  const countMessage = useSelector(selectMessageCountState);

  window.addEventListener("click", () => dispatch(showBell(false)));
  window.addEventListener("click", () => dispatch(showDownHeader(false)));
  window.addEventListener("click", () => dispatch(showUser(false)));
  const showBurger = (e) => {
    dispatch(burgerShow(true));
    dispatch(showDownHeader(false));
    dispatch(showBell(false));
    dispatch(showUser(false));
    dispatch(filter(false));
    e.stopPropagation();
  };
  const downHeader = (e) => {
    dispatch(showDownHeader(true));
    dispatch(showBell(false));
    dispatch(showUser(false));
    dispatch(filter(false));
    dispatch(burgerShow(false));
    e.stopPropagation();
  };
  const showUserClick = (e) => {
    dispatch(showUser(true));
    dispatch(showBell(false));
    dispatch(showDownHeader(false));
    dispatch(burgerShow(false));
    e.stopPropagation();
  };
  const showBellClick = (e) => {
    dispatch(showBell(true));
    dispatch(showUser(false));
    dispatch(showDownHeader(false));
    dispatch(burgerShow(false));
    e.stopPropagation();
  };

  return (
    <header>
      <div
        className={showHeader ? style.hidden_block_show : style.hidden_block}
        onClick={(e) => e.stopPropagation()}
      >
        <>
          <span className={style.header_icon_hidden}>
            <ImSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className={style.search_place}
          />
        </>
        <button className={style.search_btn}>Search</button>
      </div>
      <div className={style.header_left_block}>
        <div onClick={(e) => showBurger(e)} className={style.burger}>
          <GiHamburgerMenu />
        </div>
        <div className={style.header_icons} onClick={(e) => downHeader(e)}>
          <ImSearch />
        </div>
      </div>
      <div className={style.right_block}>
        <span className={style.header_icons} onClick={(e) => showBellClick(e)}>
          <ImBell />
          <p>{countMessage ? countMessage : null}</p>
        </span>
        <img
          src="./images/avatar.jpg"
          alt="avatar"
          className={style.avatar}
          onClick={(e) => showUserClick(e)}
        />
      </div>
      {showBellState && <BellClick />}
      {showUserState && <UserClick />}
    </header>
  );
};
export default Header;
