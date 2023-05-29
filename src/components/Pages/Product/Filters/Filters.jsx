import { RxCross2 } from "react-icons/rx";
import { BsCheck } from "react-icons/bs";
import s from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterColorsList,
  selectFilterCategory,
  selectFilterGenders,
  setCategory,
  setGender,
  setColors,
  clealAll,
  filter,
} from "../../../../features/ProductSlice";
import { FILTER_CATEGORY, FILTER_COLORS, FILTER_GENDER } from "./config";

const Filters = () => {
  const dispatch = useDispatch();

  const filterColorsList = useSelector(selectFilterColorsList);
  const filterGenderList = useSelector(selectFilterGenders);
  const filterCategory = useSelector(selectFilterCategory);

  const filterHidden = () => dispatch(filter(false));

  window.addEventListener("click", filterHidden);

  const handleChangeGender = (e) => {
    dispatch(setGender(e.target.name));
  };

  const handleChangeColor = (color) => {
    dispatch(setColors(color));
  };

  const handleChangeCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleClear = () => dispatch(clealAll());

  return (
    <form
      className={s.container}
      onSubmit={(e) => e.preventDefault()}
      onClick={(e) => e.stopPropagation()}
    >
      <p>
        Filters
        <span onClick={filterHidden}>
          <RxCross2 />
        </span>
      </p>
      <div className={s.gender_container}>
        <p>Gender</p>
        {FILTER_GENDER.map((item) => (
          <div key={item.name}>
            <label className={s.custom_checkbox}>
              <input
                type="checkbox"
                name={item.name}
                className={s.hidden_checkbox}
                onChange={handleChangeGender}
                checked={filterGenderList.includes(item.name)}
              />
              <div className={s.checkbox}>
                <BsCheck className={s.checkmark} />
              </div>
              <p>{item.label}</p>
            </label>
          </div>
        ))}
      </div>
      <div className={s.category_container}>
        <p>Category</p>
        {FILTER_CATEGORY.map((item) => (
          <label key={item.label} className={s.radio}>
            <input
              type="radio"
              name={item.category}
              className={s.hidden_radio}
              value={item.value}
              onChange={handleChangeCategory}
              checked={filterCategory === item.value}
            />
            <p>{item.label}</p>
            <span></span>
          </label>
        ))}
      </div>
      <div className={s.colors_container}>
        <p>Colors</p>
        <div className={s.color}>
          {FILTER_COLORS.map((item) => (
            <div
              className={
                filterColorsList.includes(item.color) ? s.active : null
              }
              onClick={() => handleChangeColor(item.color)}
              key={item.color}
            >
              <i className={s[item.color]}></i>
            </div>
          ))}
        </div>
      </div>
      <input type="reset" value="Clear All" onClick={handleClear} />
    </form>
  );
};
export default Filters;
