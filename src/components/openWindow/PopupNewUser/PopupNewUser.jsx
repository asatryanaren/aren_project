import { useState } from "react";
import s from "./PopupNewUser.module.css";
import {
  addUser,
  selectshowPopupState,
  showPopupUser,
} from "../../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const PopupNewUser = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [verified, setVerified] = useState("Yes");
  const dispatch = useDispatch();
  const show = useSelector(selectshowPopupState);
  const hiddenPopupUser = () => dispatch(showPopupUser(false));
  const addNewUser = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, company, role, verified }));
    setName("");
    setCompany("");
    setRole("");
  };

  return (
    <>
      {show && (
        <div className={s.blur_container} onClick={hiddenPopupUser}>
          <form
            onSubmit={(e) => addNewUser(e)}
            onClick={(e) => e.stopPropagation()}
            className={s.container_popupNewUser}
          >
            <div>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={5}
                required
              />
            </div>
            <div>
              <label>Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                maxLength={5}
                required
              />
            </div>
            <div>
              <label>Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                maxLength={5}
                required
              />
            </div>
            <section>
              <p>Verified</p>
              <label className={s.radio}>
                <input
                  type="radio"
                  name="verified"
                  className={s.hidden_radio}
                  onClick={() => setVerified("No")}
                  required
                />
                <span></span>
                <p>No</p>
              </label>
              <label className={s.radio}>
                <input
                  type="radio"
                  name="verified"
                  className={s.hidden_radio}
                  onClick={() => setVerified("Yes")}
                  required
                />
                <span className={s.span}></span>
                <p>Yes</p>
              </label>
            </section>
            <button>Add</button>
          </form>
        </div>
      )}
    </>
  );
};
export default PopupNewUser;
