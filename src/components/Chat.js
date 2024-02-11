import { useNavigate } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";

import avatar from "../images/avatar.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.jpg";

import Fade from "react-reveal/Fade";
import { MdOutlineCancel } from "react-icons/md";

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
];

const Chat = () => {
  const { currentColor, setIsClicked } = useStateContext();

  const navigate = useNavigate();

  const handleToAllMassages = () => {
    navigate("/messages");
    setIsClicked(false);
  };

  return (
    <div className="chat__background">
      <Fade top>
        <div className="chat">
          <div className="chat__container">
            <div className="chat__container-header">
              <p className="chat__container-title">Messages</p>
              <button
                className="chat__container-btn"
                type="button"
                onClick={() => setIsClicked(false)}
              >
                <MdOutlineCancel />
              </button>
            </div>
            <div className="chat__container-content">
              <ul className="chat__container-menu">
                {chatData.map((item, index) => (
                  <li className="chat__container-item" key={index}>
                    <img
                      src={item.image}
                      className="chat__container-avatar"
                      alt=""
                    />
                    <div className="chat__container-messages">
                      <h3 className="chat__container-message">
                        {" "}
                        {item.message}{" "}
                      </h3>
                      <p className="chat__container-description">{item.desc}</p>
                      <p className="chat__container-time">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="chat__container-content__btn"
                style={{ backgroundColor: currentColor }}
                onClick={handleToAllMassages}
              >
                See all messages
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Chat;
