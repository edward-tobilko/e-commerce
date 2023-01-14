import React from "react";

import { MyButton } from "../components";
import AnswerMessageComponent from "../components/AnswerMessageComponent";
import OrdersHeader from "../components/OrdersHeader";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../images/avatar.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.jpg";

// data
const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

const Messages = () => {
  const { isClicked } = useStateContext();

  return (
    <div className="orders">
      <div className="orders__container">
        <OrdersHeader title="Messages" />
      </div>

      <div className="chat messages">
        <div className="chat__container-content">
          <ul className="chat__container-menu">
            {chatData.map((item, index) => (
              <li className="chat__container-item messages__item" key={index}>
                <div>
                  <img
                    src={item.image}
                    className="chat__container-avatar messages__avatar"
                    alt=""
                  />
                </div>

                <div className="chat__container-messages messages__container">
                  <div>
                    <h3 className="chat__container-message">
                      {" "}
                      {item.message}{" "}
                    </h3>
                    <p className="chat__container-description">{item.desc}</p>
                    <p className="chat__container-time">{item.time}</p>
                  </div>

                  <div>
                    <MyButton text={"Answer"} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {isClicked.answerMessage && <AnswerMessageComponent />}
      </div>
    </div>
  );
};

export default Messages;
