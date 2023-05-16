import s from "./Product.module.css";
import { TbTriangleInverted } from "react-icons/tb";
import Filters from "./Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import {
  filter,
  selectFilterState,
  selectProductState,
} from "../../../features/ProductSlice";
import { burgerShow, showDownHeader } from "../../../features/headerSlice";

const Product = () => {
  const product = useSelector(selectProductState);
  const filterState = useSelector(selectFilterState);
  const dispatch = useDispatch();
  const filterShow = (e) => {
    e.stopPropagation();
    dispatch(filter(true));
    dispatch(showDownHeader(false));
    dispatch(burgerShow(false));
  };

  return (
    <div className={s.container}>
      <div className={s.product_container}>
        <h1>Products</h1>
        <div onClick={(e) => filterShow(e)}>
          Filters
          <TbTriangleInverted />
        </div>
      </div>
      <div className={s.info_container}>
        {product.map((i) => {
          return (
            <div key={i.id} className={s.block}>
              <div className={s.img_container}>
                <img src={i.imgSrc} />
              </div>
              <div className={s.info}>
                <p>
                  {i.text.length > 23
                    ? i.text.substring(0, 20) + "..."
                    : i.text}
                </p>
                <span>{"$ " + i.price}</span>
              </div>
            </div>
          );
        })}
      </div>
      {filterState && <Filters />}
    </div>
  );
};
export default Product;
