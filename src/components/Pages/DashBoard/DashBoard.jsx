import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import s from "./Dashboard.module.css";
import { BsAndroid2, BsApple } from "react-icons/bs";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { AiFillBug } from "react-icons/ai";

const DashBorad = () => {
  return (
    <div className={s.container}>
      <h1>Hi, Welcome back</h1>
      <div className={s.item_container}>
        <div className={s.item + " " + s.item_one}>
          <div>
            <BsAndroid2 />
          </div>
          <span>714K</span>
          <p>Weekly Sales</p>
        </div>
        <div className={s.item + " " + s.item_two}>
          <div>
            <BsApple />
          </div>
          <span>1.35m</span>
          <p>New Users</p>
        </div>
        <div className={s.item + " " + s.item_three}>
          <div>
            <TfiMicrosoftAlt />
          </div>
          <span>1.72m</span>
          <p>item Orders</p>
        </div>
        <div className={s.item + " " + s.item_four}>
          <div>
            <AiFillBug />
          </div>
          <span>234</span>
          <p>Bug Reports</p>
        </div>
      </div>
      <div>
        <div className={s.charts_container}>
          <div>
            <BarChart />
          </div>
          <div>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBorad;
