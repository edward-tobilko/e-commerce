import React, { useState } from "react";

import { GrSend } from "react-icons/gr";
import { MdOutlineCancel, MdOutlineDoneAll } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";
import avatar1 from "./../images/avatar.jpg";
import avatar2 from "./../images/avatar2.jpg";

const AnswerMessageComponent = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      img: avatar1,
      type: "",
      msg: "Hi Kira, how are you?",
      me: <MdOutlineDoneAll />,
    },
    {
      id: 2,
      img: avatar2,
      type: "other",
      msg: "I am fine.",
    },
    {
      id: 3,
      img: avatar2,
      type: "other",
      msg: "What about you?",
    },
    {
      id: 4,
      img: avatar1,
      type: "",
      msg: "Awesome these days.",
      me: <MdOutlineDoneAll />,
    },
    {
      id: 5,
      img: avatar2,
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      id: 6,
      img: avatar1,
      type: "",
      msg: "What plan mate?",
      me: <MdOutlineDoneAll />,
    },
    {
      id: 7,
      img: avatar2,
      type: "other",
      msg: "I'm taking about the tutorial",
    },
    {
      id: 8,
      img: avatar1,
      type: "",
      msg: "It's greate",
      me: <MdOutlineDoneAll />,
    },
  ]);

  // for a new message;
  const [newMessage, setNewMessage] = useState({
    msg: "",
    img: avatar1,
    me: <MdOutlineDoneAll />,
  });
  const { setIsClicked } = useStateContext();

  const createNewMessage = (newMess) => {
    setChatMessages([...chatMessages, newMess]);
  };

  const addNewMessage = (event) => {
    event.preventDefault();

    let newMess = {
      ...newMessage,
      id: Math.random().toString(36).substr(2, 9),
    };

    createNewMessage(newMess);
    setNewMessage({ msg: "" });
  };

  return (
    <div className="message__background">
      <div className="message">
        <div className="message-header">
          <h1 className="message-header__title">Chat</h1>
          <button
            className="chat__container-btn close"
            type="button"
            onClick={() => setIsClicked(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="message-content">
          {chatMessages.map((item) => (
            <div className="message-content__item" key={item.id}>
              <img src={item.img} alt="" className="message-content__img" />
              <p className="message-content__subtitle">
                {" "}
                {item.msg}{" "}
                <span style={{ color: "blue", fontSize: 15 }}> {item.me} </span>
              </p>
            </div>
          ))}
        </div>
        <form className="message-footer">
          <textarea
            name="msg"
            className="message-textArea"
            placeholder="Send message..."
            maxLength={100}
            minLength={3}
            onChange={(event) =>
              setNewMessage({ ...newMessage, msg: event.target.value })
            }
            value={newMessage.msg}
          />
          <button
            className="message-footer__btn"
            type="submit"
            onClick={addNewMessage}
          >
            <GrSend className="message-footer__icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnswerMessageComponent;
