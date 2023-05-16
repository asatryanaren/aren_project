import s from "./BellClick.module.css";
import { BsCheck2All, BsClock } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  messageCountRemuve,
  selectMessageCountState,
} from "../../features/headerSlice";

const BellClick = () => {
  const countMessage = useSelector(selectMessageCountState);
  const dispatch = useDispatch();
  const countMsg = () => dispatch(messageCountRemuve());

  return (
    <div className={s.container} onClick={(e) => e.stopPropagation()}>
      <div className={s.notifactions_Block}>
        <div>
          <h3>Notifications</h3>
          <p>You have {countMessage} unread messages</p>
        </div>
        <button onClick={countMsg}>
          <BsCheck2All />
        </button>
      </div>
      <div className={s.new_Block}>
        <h4>NEW</h4>
        <div
          className={
            countMessage === 2 ? s.message_block : s.message_block_white
          }
        >
          <div className={s.img_first_block}>
            <img src="./images/ic_notification_package.svg" />
          </div>
          <div>
            <p>
              <span>Your order is placed</span> waiting for shipping
            </p>
            <p className={s.icon_text}>
              <BsClock /> about 11 hours ago
            </p>
          </div>
        </div>
        <div
          className={
            countMessage === 2 ? s.message_block : s.message_block_white
          }
        >
          <img src="./images/avatar.jpg" className={s.avatar} />
          <div>
            <p>
              <span>Lucas Schuster</span> answered to your comment on the
              minimal
            </p>
            <p className={s.icon_text}>
              <BsClock /> about 4 hours ago
            </p>
          </div>
        </div>
      </div>
      <h4 className={s.before_head}>BEFORE THAT</h4>
      <div className={s.before_meassages_block}>
        <div className={s.img_block}>
          <img src="./images/ic_notification_chat.svg" />
        </div>
        <div>
          <p>
            <span>You have new message</span> 5 unread messages
          </p>
          <p className={s.icon_text}>
            <BsClock /> 1 day ago
          </p>
        </div>
      </div>
      <div className={s.before_meassages_block}>
        <div className={s.img_block}>
          <img src="./images/ic_notification_mail.svg" />
        </div>
        <div>
          <p>
            <span>You have new mail</span> sent from guido padberg
          </p>
          <p className={s.icon_text}>
            <BsClock /> 2 day ago
          </p>
        </div>
      </div>
      <div className={s.before_meassages_block}>
        <div className={s.img_block}>
          <img src="./images/ic_notification_shipping.svg" />
        </div>
        <div>
          <p>
            <span>Delivery processing</span> your order is being shipped
          </p>
          <p className={s.icon_text}>
            <BsClock /> 3 day ago
          </p>
        </div>
      </div>
    </div>
  );
};
export default BellClick;
