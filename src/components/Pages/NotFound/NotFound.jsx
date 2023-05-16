import { NavLink } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.container}>
      <h1>Sorry, page not found!</h1>
      <p>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </p>
      <img src="./images/404.svg" alt="404 Error" />
      <NavLink to="/">
        <button>Go To Home</button>
      </NavLink>
    </div>
  );
};
export default NotFound;
