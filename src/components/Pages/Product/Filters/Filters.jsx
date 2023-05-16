import { RxCross2 } from "react-icons/rx";
import s from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  gender,
  genderInitialState,
  men,
  women,
  kids,
  selectMenState,
  selectWomenState,
  selectKidsState,
  color,
  category,
  filter,
} from "../../../../features/ProductSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const checkedMen = useSelector(selectMenState);
  const checkedWomen = useSelector(selectWomenState);
  const checkedKids = useSelector(selectKidsState);

  const filterHidden = () => dispatch(filter(false));

  window.addEventListener("click", filterHidden);

  const changeMen = () =>
    checkedMen ? dispatch(genderInitialState()) : dispatch(gender("men"));
  const changeWomen = () =>
    checkedWomen ? dispatch(genderInitialState()) : dispatch(gender("women"));
  const changeKids = () =>
    checkedKids ? dispatch(genderInitialState()) : dispatch(gender("kids"));

  const checkM = () => dispatch(men(!checkedMen));
  const checkW = () => dispatch(women(!checkedWomen));
  const checkK = () => dispatch(kids(!checkedKids));

  const ClearAll = () => dispatch(genderInitialState());

  const green = () => dispatch(color("green"));
  const blue = () => dispatch(color("blue"));
  const black = () => dispatch(color("black"));
  const white = () => dispatch(color("white"));
  const pink = () => dispatch(color("pink"));
  const red = () => dispatch(color("red"));
  const lightGreen = () => dispatch(color("lightGreen"));
  const yellow = () => dispatch(color("yellow"));

  const categoryAll = () => dispatch(category("all"));
  const categoryShose = () => dispatch(category("shose"));
  const categoryApparel = () => dispatch(category("apparel"));
  const categoryAccessories = () => dispatch(category("accessories"));

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
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkedMen}
              onClick={checkM}
              onChange={changeMen}
            />
            Men
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkedWomen}
              onClick={checkW}
              onChange={changeWomen}
            />
            Women
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkedKids}
              onClick={checkK}
              onChange={changeKids}
            />
            Kids
          </label>
        </div>
      </div>
      <div className={s.category_container}>
        <p>Category</p>
        <div>
          <label>
            <input type="radio" name="category" onClick={categoryAll} />
            All
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="category" onClick={categoryShose} />
            Shose
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="category" onClick={categoryApparel} />
            Apparel
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="category" onClick={categoryAccessories} />
            Accessories
          </label>
        </div>
      </div>
      <div className={s.colors_container}>
        <p>Colors</p>
        <div className={s.color}>
          <div onClick={green}>
            <i className={s.green}></i>
          </div>
          <div onClick={black}>
            <i className={s.black}></i>
          </div>
          <div onClick={white}>
            <i className={s.white}></i>
          </div>
          <div onClick={pink}>
            <i className={s.pink}></i>
          </div>
        </div>
        <div className={s.color}>
          <div onClick={red}>
            <i className={s.red}></i>
          </div>
          <div onClick={blue}>
            <i className={s.blue}></i>
          </div>
          <div onClick={lightGreen}>
            <i className={s.lightGreen}></i>
          </div>
          <div onClick={yellow}>
            <i className={s.yellow}></i>
          </div>
        </div>
      </div>
      <input type="reset" value="Clear All" onClick={ClearAll} />
    </form>
  );
};
export default Filters;
