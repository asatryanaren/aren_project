import { useDispatch, useSelector } from "react-redux";
import s from "./blog.module.css";
import { ImSearch } from "react-icons/im";
import { filterBlog, selectBlogState } from "../../../features/blogSlice";

const Blog = () => {
  const data = useSelector(selectBlogState);
  const dispatch = useDispatch();
  const value = (v) => dispatch(filterBlog(v.target.value));

  return (
    <div className={s.container}>
      <div className={s.search_container}>
        <h1>Blog</h1>
        <div>
          <ImSearch />
          <input
            type="text"
            placeholder="Search post..."
            onChange={(v) => value(v)}
          />
        </div>
      </div>
      <div className={s.info_container}>
        {data.map((i) => {
          return (
            <div key={i.id} className={s.block}>
              <div className={s.img_container}>
                <img src={i.imgSrc} />
              </div>
              <div className={s.info}>
                <img src={i.avatar} />
                <span>{i.date}</span>
                <p>
                  {i.text.length < 50
                    ? i.text
                    : i.text.substring(0, 50) + "..."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blog;
