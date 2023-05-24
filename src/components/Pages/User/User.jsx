import s from "./User.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegTrashAlt, FaHandPointRight } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { ImCheckmark2, ImCheckmark } from "react-icons/im";
import {
  selectUserState,
  deleteUser,
  searchUser,
  showPopupUser,
  userCompleted,
  userDeleteAllCompleted,
  userAllChecks,
  userAllInchecks,
  selectStatusBlockState,
  statusBlock,
  status,
  selectIdState,
  statusEdit,
} from "../../../features/userSlice";
import { useState } from "react";

const User = () => {
  const userState = useSelector(selectUserState);
  const dispatch = useDispatch();
  const [allChecksLogo, setAllChecksLogo] = useState(false);
  const addPopup = () => dispatch(showPopupUser(true));
  const search = (e) => dispatch(searchUser(e));
  const completed = (id) => dispatch(userCompleted(id));
  const deleteAllCompleted = () => dispatch(userDeleteAllCompleted());
  const allChecks = () => {
    allChecksLogo ? dispatch(userAllInchecks()) : dispatch(userAllChecks());
    setAllChecksLogo(!allChecksLogo);
  };
  const delet = (id) => dispatch(deleteUser(id));
  const statusBlockState = useSelector(selectStatusBlockState);
  const idStatus = useSelector(selectIdState);
  document.addEventListener("click", () => dispatch(statusBlock(false)));
  const statusEditActive = () => {
    dispatch(statusBlock(false));
    dispatch(statusEdit("Active"));
  };
  const statusEditBanned = () => {
    dispatch(statusBlock(false));
    dispatch(statusEdit("Banned"));
  };

  return (
    <section className={s.container}>
      <div className={s.title_container}>
        <h1>User</h1>
        <button onClick={addPopup} className={s.add_button}>
          <AiOutlinePlus /> New User
        </button>
      </div>
      <div>
        <div className={s.search_container}>
          <div>
            <ImSearch />
            <input
              type="text"
              placeholder="Search User..."
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <span onClick={deleteAllCompleted}>
            <FaRegTrashAlt />
          </span>
        </div>
        <ul className={s.user_container + " " + s.user_container_header}>
          <li className={s.checkbox}>
            <label onClick={allChecks}>
              {allChecksLogo ? <ImCheckmark /> : <ImCheckmark2 />}
            </label>
            <span>Name</span>
          </li>
          <li className={s.company}>Company</li>
          <li className={s.role}>Role</li>
          <li className={s.verified}>Verified</li>
          <li className={s.status}>Status</li>
        </ul>
        {userState.map((i) => {
          return (
            <ul key={i.id} className={s.user_container}>
              <li className={s.checkbox}>
                <label className={s.custom_checkbox}>
                  <input
                    type="checkbox"
                    className={s.hidden_checkbox}
                    checked={i.completed}
                    onChange={() => completed(i.id)}
                  />
                  <div className={s.checkbox}>
                    <BsCheck className={s.checkmark} />
                  </div>
                </label>
                <img src={i.imgSrc} />
                <span>{i.name}</span>
              </li>
              <li className={s.company}>{i.company}</li>
              <li className={s.role}>{i.role}</li>
              <li className={s.verified}>{i.verified}</li>

              <li onClick={(e) => e.stopPropagation()} className={s.status}>
                <span
                  className={i.status === "Active" ? s.active : s.banned}
                  onClick={() => dispatch(status(i.id))}
                >
                  {i.status}
                </span>
                <i onClick={() => delet(i.id)}>
                  <FaRegTrashAlt />
                </i>
                <ul
                  className={
                    idStatus === i.id && statusBlockState
                      ? s.status_block_show
                      : s.status_block_hidden
                  }
                >
                  <li>
                    <span>
                      <FaHandPointRight />
                    </span>
                    <p onClick={statusEditActive}>Active</p>
                  </li>
                  <li>
                    <span>
                      <FaHandPointRight />
                    </span>
                    <p onClick={statusEditBanned}>Banned</p>
                  </li>
                </ul>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};
export default User;
